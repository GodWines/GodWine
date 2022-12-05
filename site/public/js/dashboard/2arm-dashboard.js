const dataPizza = {
    labels: [
      'Branco Encorpado',
      'Branco Aromatico',
      'Rose'
    ],
    datasets: [{
      label: 'Quantidade em estoque',
      data: [56, 83, 81],
      backgroundColor: [
        'rgba(255, 195, 0, 1)',
        'rgba(86, 11, 173, 1)',
        'rgba(226, 18, 105, 1)'
  
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
    document.getElementById('myChart4'),
    config3
  );
  
 