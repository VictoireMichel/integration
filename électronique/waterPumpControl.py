import pyfirmata
import time
import requests


board = pyfirmata.Arduino('COM8')


import time

def executeSomething():
    #code here
    board.digital[8].write(1)
    currentHum = requests.get('https://pi2-ephec.herokuapp.com/data/last?potId=1')
    minHum = requests.get('https://pi2-ephec.herokuapp.com/data/humidityThreshold?potId=1')
    arrosageAutYesOrNo = requests.get('https://pi2-ephec.herokuapp.com/users/getLearningMode?id=32')
    # print(x.status_code)
    # print(x.json())
    oneOrZero = arrosageAutYesOrNo.json()
    currentHumNum = currentHum.json()
    minHumNum = minHum.json()

    print(oneOrZero[0]["learningMode"])
    print(minHumNum.get("humidity"))
    print(currentHumNum[0]["dataHumidity"])
    learningMode = oneOrZero[0]["learningMode"]
    humidityMin = minHumNum.get("humidity")
    humidtyFromPlant = currentHumNum[0]["dataHumidity"]
    if ((humidityMin > humidtyFromPlant) and (learningMode == 1)):  # Mode auto activer et allume la pompe quelque seconde
        board.digital[8].write(0)
        print("ok")
        time.sleep(5)
        board.digital[8].write(1)
        #time.sleep(3)
    if ((humidityMin < 80)):
        board.digital[8].write(0)
while True:
    executeSomething()
#while True:

