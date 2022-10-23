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


  
  const data1 = {
    labels: labels,
    datasets: [{
      label: 'Temperatura',
      backgroundColor: 'rgb(255, 0, 77)',
      borderColor: 'rgb(255, 0, 77)',
      data: [30, 29, 28, 25, 22, 23],
    },{
      label: 'Umidade',
      backgroundColor: 'rgb(0, 179, 225)',
      borderColor: 'rgb(0, 179, 225)',
      data: [80, 82, 80, 85, 80, 83],
    }]
  };

   const data2 = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};



  const config1 = {
    type: 'line',
    data: data1,
    options: {
        layout: {
            padding: 5
        }
}
    
  };

  const config2 = {
    type: 'bar',
    data: data1,
    options: {}
    
  };

  const config3 = {
    type: 'doughnut',
    data: data2,
    options: {}
    
  };

   const config4 = {
    type: 'pie',
    data: data2,
    options: {}
    
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
  
  


