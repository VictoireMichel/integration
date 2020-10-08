const unsigned int BAUDRATE = 9600; //Avec cette vitesse les PC communique avec l'Arduino
(9600 Bits par seconde)

const byte TEMPSIGNALPIN = A5; // Les volts vont etre lis ici

int dbConnect = 10; //connect db

void setup()
{ 
pinMode(dbConnect, OUTPUT); 

Serial.begin(9600);
} 


void loop(){
int value = analogRead(TEMPSIGNALPIN); // Lis le pin analog 5

delay(1000); // Ici on peut définir dans quel intervalle on va mésurer la temp
Serial.println(value); 
int milliVolt = (value * 5000.0) / 1024.0; // Rechnung um die Spannung in milli Volt anzugeben
Serial.print(milliVolt);



int celius = milliVolt/10; // Rechnung um die milli Volt in Celius anzugeben
Serial.print(celius);


}
} 
