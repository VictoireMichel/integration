import serial
import time
import json
import datetime
import requests
# set up the serial line
ser = serial.Serial('COM7', 9600)
time.sleep(2)

# Read and record the data
data ={}                    # empty list to store the data
while True:
    #print('{:%Y-%m-%d %H:%M:%S}'.format(datetime.datetime.now()))  # convert string to float
    b = ser.readline()         # read a byte string
    string_n = b.decode()  # decode byte string into Unicode
    string = string_n.rstrip() # remove \n and \r
    flt = (string)
    flt = flt.replace("\'", "\"")
    test_string =  flt
    #print(test_string)
    res = json.loads(test_string)

    time.sleep(0.1)
    #print(flt)
    #print (flt)
    data = res

    #print (data)

    data['timeStamp'] = '{:%Y-%m-%d %H:%M:%S}'.format(datetime.datetime.now())
    data['potId'] = 1
    #print(data)

    print(data)
    #json.dumps(data, sort_keys=True, indent=4)# wait (sleep) 0.1 seconds

    #data['id'] = '1'
    json_data = json.dumps(data)

    r = requests.post("http://51.77.203.95:3000/data/upload", data)

    print(r.status_code, r.reason)
ser.close()