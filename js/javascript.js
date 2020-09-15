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

  // BELL NOTIFICATIONS
// const bell = document.getElementsByClassName('graphic')[0];
// const user_notification = document.getElementsByClassName('user-notification');
// bell.addEventListener('click', () => {
//     if (user_notification.style.display === "none") {
//         user_notification.style.display = "block";
//     } else {
//         notifications.style.display = "none";
//     }
// });

  //CHART WIDGETS
        //Line graph
  let trafficCanvas = document.getElementById('traffic-chart');
  let trafficData = {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgba(255,178,38, .3)',
      borderWidth: 3,
      borderColor: 'rgba(255,165,0, .4)',
      
      
    }]
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

//BAR GRAPH
const dailyCanvas = document.getElementById('daily-chart');

//data for daily traffic chart
const dailyData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100, 130],
        backgroundColor: 'rgba(255,165,0, .3)',
        borderWidth: 3,
        borderColor: 'rgba(255,165,0, .4)',
        hoverBackgroundColor: 'rgba(255,165,0)',
        
    }]
};

const dailyOptions = {
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
}
    //create a chart
    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
    });

//data for mobile chart
const mobileCanvas = document.getElementById('mobile-chart');
    //create an object literal for the data
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of users',
        data: [2000, 550, 500],
        borderWidth: 2,
        backgroundColor: [
            'rgba(255,165,0, .1)',
            'rgba(255,165,0, .5)',
            'rgba(255,165,0)'
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

    //Messaging section
        //variables that store the form fields
    const user = document.getElementById('userField');
    const message = document.getElementById('messageField');
    const send = document.getElementById('send');
        //Click event listener on send
    send.addEventListener('click', () => {
        // conditional to make sure the user and message fields are not empty
        if (user.value === '' && message.value === '') {
            alert('Please, fill out user and message fields before sending');
        } else if (user.value === '') {
            alert('Please fill out the user field before sending');
        } else if(message.value === '') {
            alert('Please fill out the message field before sending');
        } else {
            alert(`Message has been succesfully sent to ${user.value}`);
        }
    });


