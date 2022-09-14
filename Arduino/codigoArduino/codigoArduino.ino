#include "DHT.h"
#define dht_type DHT11 // define qual o tipo de sensor DHTxx que se está
/**
 * Configurações iniciais sobre os sensores
 * DHT11, TOTALMENTE CONFIGURADO
 */
int dht_pin = A2;
DHT dht_1 = DHT(dht_pin, dht_type); // pode-se configurar diversos sensores DHTxx
/* Configuração inicial*/
void setup()
{
  Serial.begin(9600);
  dht_1.begin();
}
/* Programa rodando */
void loop()
{

  float umidade = dht_1.readHumidity();
  float temperatura = dht_1.readTemperature();
  if (isnan(temperatura) or isnan(umidade))
  {
    Serial.println("Erro ao ler o DHT");
  }
  else
  {
    Serial.print(umidade);
    Serial.print("% umidade");
    Serial.println(";");
    Serial.print(temperatura);
    Serial.print("ºC de temperatura");
    Serial.println(";");
  }
  delay(4000);
}
