// TIMEZONE (Ressources from https://www.geeksforgeeks.org/how-to-add-options-to-a-select-element-using-jquery/)
timeZones = {"GMT": "Greenwich", "UTC": "Universal", "ECT": "European Central Time", "EET": "Eastern European Time", "ART": "Egypt Standard Time", "MET": "Middle East", "NET": "Near East", "PLT": "Pakistan Lahore", "IST": "India Standard", "BST": "Bangladesh Standard", "VST": "Vietnam Standard", "CTT": "China Taiwan", "JST": "Japan Standard", "ACT": "Australia Central", "AET": "Australia Eastern", "SST": "Solomon Standard", "NST": "New Zealand Standard", "MIT": "Midway Islands", "HST": "Hawaii Standard", "AST": "Alaska Standard","PST": "Pacific Standard", "PNT": "Phoenix Standard ", "MST": "Mountain Standard", "CST": "Central Standard", "EST": "Eastern Standard", "IET": "Indiana Eastern Standard", "PRT": "Puerto Rico and US Virgin Islands", "CNT": "Canada Newfoundland", "AGT": "Argentina Standard", "BET": "Brazil Eastern", "CAT": "Central African" };
$.each(timeZones, function(key, value) {   
    $('.form-selector')
        .append($("<option></option>")
                   .attr("value", key)
                   .text(value)); 
});

// Hamburguer menu

$('.menu-toggle').click(function(){
    $('nav').toggleClass('site_nav_open',600);
    $(this).toggleClass('open');
  })
  
  //ALERT BANNER
  const alertBanner = document.getElementById('alert');
        //   Create the html for the banner:
  alertBanner.innerHTML = `<div class="alert-banner">
                        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
                        <p class="alert-banner-close">x</p>
                        </div>`;
        // Add a click event listener to the alert banner:
  alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = 'none';
    }
  });

  //CHART WIDGETS
        //Line graph
  let trafficCanvas = document.getElementById('traffic-chart');
  let trafficData = {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rbga(255, 178, 38 .3)',
      borderWidth: 1,
    }]
  };
        //Object literal to set the iptions to be changed for the chart
    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    };

        //Create chart itself
    // const canvas = document.getElementsByClassName('canvas');
    const canvas_traffic = document.getElementsByClassName('canvas')[0];
    let trafficChart = new Chart (trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });