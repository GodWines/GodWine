#include "DHT.h"
#define dht_type DHT11 //define qual o tipo de sensor DHTxx que se está utilizando
/**
* Configurações iniciais sobre os sensores
* DHT11, LM35, LDR5 e TCRT5000
*/
int dht_pin = A5; //defino o pino do DHT analógico


DHT dht_2 = DHT(dht_pin, dht_type); //pode-se configurar diversos *sensores DHTxx


int lm35_pin = A2, leitura_lm35 = 0;
float temperatura;
int ldr_pin = A3, leitura_ldr = 0;
int switch_pin = 7;

// configuração inicial
void setup()
{
Serial.begin(9600);
dht_2.begin();

// Para porta digital
pinMode(switch_pin, INPUT);
}


//codigo rodando

void loop()
{
/**
* Bloco do DHT11
*/
float umidade = dht_2.readHumidity();
float temperatura = dht_2.readTemperature();

if (isnan(temperatura) or isnan(umidade))
{
Serial.println("Erro ao ler o DHT");
}

else
{
Serial.print(umidade);
Serial.print(";");
Serial.print(temperatura);
Serial.print(";");
}
/**
* Bloco do LM35
*/
leitura_lm35 = analogRead(lm35_pin);
temperatura = leitura_lm35 * (5.0/1023) * 100;
Serial.print(temperatura);
Serial.print(";");
/**
* Bloco do LDR5
*/
leitura_ldr = analogRead(ldr_pin);
Serial.print(leitura_ldr);
Serial.print(";");
/**
* Bloco do TCRT5000
*/
if(digitalRead(switch_pin) == LOW){
Serial.println(1);
}
else {
Serial.println(0);
}
delay(60000);
}
