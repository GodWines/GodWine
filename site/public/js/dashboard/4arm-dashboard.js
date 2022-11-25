/*--------------------------------------------------------------------------------------------------------*/
/*Graficos da Dashboard*/
const labels = [
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];

const labels1 = [
  'Semana 1',
  'Semana 2',
  'Semana 3',
  'Semana 4',
  'Semana 5',
  'Semana 6',
];


const dataLinha = {
  labels: labels,
  datasets: [{
    label: 'Temperatura',
    backgroundColor: 'rgba(86, 11, 173, 1)',
    borderColor: 'rgba(86, 11, 173, 1)',
    data: [20, 20, 19, 17, 17, 17],
  }, {
    label: 'Umidade',
    backgroundColor: 'rgba(255, 195, 0, 1)',
    borderColor: 'rgba(255, 195, 0, 1)',
    data: [74, 73, 72, 73, 73, 71],

  }]
};

const dataBarra = {
  labels: labels1,
  datasets: [{
    label: 'Temp Maxima',
    backgroundColor: 'rgba(86, 11, 173, 1)',
    borderColor: 'rgb(255, 0, 77)',
    data: [20, 21, 19, 19, 20, 17],
  }, {
    label: 'Temp Minima',
    backgroundColor: 'rgba(0, 196, 201, 1)',
    borderColor: 'rgb(0, 179, 225)',
    data: [16, 17, 17, 15, 17, 15],
  }]
};

const dataPizza = {
  labels: [
    'Tinto Medio',
    'Tinto Encorpado',
    'Fortificado',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [56, 83, 41],
    backgroundColor: [
      'rgba(255, 195, 0, 1)',
      'rgba(86, 11, 173, 1)',
      'rgba(226, 18, 105, 1)'

    ],
    hoverOffset: 10

  }]
};

const dataDoughnut = {
  labels: [
    'Ok',
    'Alerta',
    'Critico'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [10, 0, 0],
    backgroundColor: [
      'rgba(25, 189, 41, 1)',
      'rgba(226, 176, 36, 1)',
      'rgba(255, 0, 0, 1)'
    ],
    hoverOffset: 10


  }]
};

const config1 = {
  type: 'line',
  data: dataLinha,
  options: {}

};

const config2 = {
  type: 'bar',
  data: dataBarra,
  options: {}

};

const config3 = {
  type: 'pie',
  data: dataPizza,
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15,
          boxHeight: 15
        }
      }
    }
  }

};

const config4 = {
  type: 'doughnut',
  data: dataDoughnut,
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15,
          boxHeight: 15
        }
      }
    }

  }

};

const myChart1 = new Chart(
  document.getElementById('myChart1'),
  config1
);

const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2
);
const myChart3 = new Chart(
  document.getElementById('myChart3'),
  config3
);

const myChart4 = new Chart(
  document.getElementById('myChart4'),
  config4
);




