/*--------------------------------------------------------------------------------------------------------*/
/*Graficos da Dashboard*/
const dataPizza = {
  labels: [
    'Tinto Leve',
    'Tinto Medio',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [56, 83],
    backgroundColor: [
      'rgba(255, 195, 0, 1)',
      'rgba(86, 11, 173, 1)',

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
    data: [10, 1, 0],
    backgroundColor: [
      'rgba(25, 189, 41, 1)',
      'rgba(226, 176, 36, 1)',
      'rgba(255, 0, 0, 1)'
    ],
    hoverOffset: 10


  }]
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

const myChart3 = new Chart(
  document.getElementById('myChart3'),
  config3
);

const myChart4 = new Chart(
  document.getElementById('myChart4'),
  config4
);




