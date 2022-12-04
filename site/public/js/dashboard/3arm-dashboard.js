const dataPizza = {
    labels: [
      'Tinto Leve',
      'Tinto Medio',
    ],
    datasets: [{
      label: 'Vinhos',
      data: [56, 83],
      backgroundColor: [
        'rgba(255, 195, 0, 1)',
        'rgba(86, 11, 173, 1)',
  
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
 
  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
  );
  