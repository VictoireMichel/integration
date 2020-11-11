int val;
int tempPin = 1;
  
const int AirValue = 620;   
const int WaterValue = 310;  
int soilMoistureValue = 0;
int soilmoisturepercent=0;
void setup()
{
  Serial.begin(9600);
}
void loop()
{
  soilMoistureValue = analogRead(A0);
  int tempLum=digitalRead(8);
  val = analogRead(tempPin);
  float mv = ( val/1024.0)*5000;
  int cel = mv/10;
  float farh = (cel*9)/5 + 32;
 // Serial.println(tempLum);
  //Serial.print(cel);
  
  
soilmoisturepercent = map(soilMoistureValue, AirValue, WaterValue, 0, 100);
soilmoisturepercent = soilmoisturepercent * -10;

String string("{'dataLuminosity':" +  String(tempLum)+ ", " + "'dataHumidity':" + String(soilmoisturepercent)+ ", " + "'dataTemperature':" + String(cel)+"}");
Serial.println(string);
  delay(5000);
}
