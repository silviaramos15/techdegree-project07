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
  

  //CHART WIDGETS

  //Function for the activate links
  const activateClass = clicked => {
    const trafficLinks = document.querySelectorAll('.traffic-nav li');
    trafficLinks.forEach(trafficLink => {
      if(trafficLink === clicked) {
        trafficLink.classList.add('activate');
      } else {
        trafficLink.classList.remove('activate');
      }
    });
  };


        //Line graph
function activate_chart (labels, data, data2){
   
  let trafficCanvas = document.getElementById('traffic-chart');
  let trafficData = {
      labels: labels,
      datasets: [{
      label: 'Current',
      data: data,
      backgroundColor: 'rgba(211,228,229, .3)',
      borderWidth: 3,
      borderColor: 'rgba(197,220,221, .4)',
      }, {
        label: 'Prediction',
        data: data2,
        backgroundColor: 'rgba(211,228,229, .3)',
        borderWidth: 3,
        borderColor: 'rgba(197,220,221, .9)',
        
        
      }
    ]
  };
        //Object literal to set the options to be changed for the chart
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
   
    let trafficChart = new Chart (trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
}

//labels and data from monthly chart
const data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 3200]
const data2 = [250, 1150, 1200, 2450, 1100, 1350, 1610, 1800, 2210, 1510, 2200, 3100]
const labels= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

activate_chart(labels,data, data2)


    //TRAFFIC CHART SWITCH
    //water data
    const water = document.getElementById('water');
    water.addEventListener('click', e => {
        activate_chart(labels,data,data2);
        activateClass(e.target);
    });

    //Accustic data
    const accustic = document.getElementById('accustic');
    accustic.addEventListener('click', e => {
       const accustic_label = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
       const accustic_data = [3, 7, 12, 19, 9, 1, 8, 10, 15, 12, 18];
       const accustic_data2 = [5, 17, 11, 10, 9, 1, 5, 12, 18, 15, 17];
        activate_chart(accustic_label, accustic_data, accustic_data2);
        activateClass(e.target);
 
    });
    //Optic data
    const optic= document.getElementById('optic');
    optic.addEventListener('click', e => {
        const optic_data = [10, 7, 9, 23, 19, 23, 8];
        const optic_data2 = [10, 7, 12, 25, 15, 20, 9];
        const optic_label = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];
        activate_chart(optic_label, optic_data, optic_data2);
        activateClass(e.target);
    });

  //Sonar data
  const sonar = document.getElementById('sonar');
  sonar.addEventListener('click', e => {
      const sonar_data = [115, 70, 23, 46, 72, 170, 91, 12];
      const sonar_data2 = [100, 50, 20, 41, 70, 120, 81, 2];
      const sonar_label = ["01-07", "08-14", "15-21", "22-28", "29-31"];
      activate_chart(sonar_label, sonar_data, sonar_data2);
      activateClass(e.target);
  });


    

//data for mobile chart
const mobileCanvas = document.getElementById('mobile-chart');
    //create an object literal for the data
const mobileData = {
    labels: ["Chemical Industrial", "Construction", "Pesticide", "Oil", "Domestic", "Agricultural", "Natural", "Other"],
    datasets: [{
        label: '# porcentage in 2016',
        data: [9, 7, 3, 39, 13, 13, 6, 7],
        borderWidth: 2,
        backgroundColor: [
            'rgba(0,139,139, 1)',
            'rgba(122,174,176, 1)',
            'rgba(149,191,192, 1)',
            'rgba(183,218,213, 1)',
            'rgba(129,178,180, 1)',
            'rgba(197,220,221, 1)',
            'rgba(211,228,229, 1)',
            'rgba(224,236,237, 1)',
        ]
    }]
};
    //Object literal for the options
    const mobileOptions = {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
    //creat a chart for the doughnout
    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
    });
