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

const bell = document.querySelector('.graphic');
const user_notification = document.querySelector('.popUp');
const ul = document.querySelector('ul');

ul.innerHTML = `<li>You have 2 new requests</li>
    <li>You have 1 new message in your inbox</li>`
       
bell.addEventListener('click', () => {
    user_notification.classList.toggle("close-popUp");
});

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
function activate_chart (labels, data){
   
  let trafficCanvas = document.getElementById('traffic-chart');
  let trafficData = {
      labels: labels,
      datasets: [{
      data: data,
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
}

//labels and data from monthly chart
const data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 3200]
const labels= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

activate_chart(labels,data)


    //TRAFFIC CHART SWITCH
    //monthly data
    const monthly = document.getElementById('monthly');
    monthly.addEventListener('click', e => {
        activate_chart(labels,data);
        activateClass(e.target);
    });

    //Hourly data
    const hourly = document.getElementById('hourly');
    hourly.addEventListener('click', e => {
       const hourly_label = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
       const hourly_data = [3, 7, 12, 19, 9, 1, 8, 10, 15, 12, 18];
        activate_chart(hourly_label, hourly_data);
        activateClass(e.target);
     
        
    });
    //daily data
    const daily = document.getElementById('daily');
    daily.addEventListener('click', e => {
        const daily_data = [10, 7, 9, 23, 19, 23, 8];
        const daily_label = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];
        activate_chart(daily_label, daily_data);
        activateClass(e.target);
    });

  //weekly data
  const weekly = document.getElementById('weekly');
  weekly.addEventListener('click', e => {
      const weekly_data = [115, 70, 23, 46, 72, 170, 91, 12];
      const weekly_label = ["01-07", "08-14", "15-21", "22-28", "29-31"];
      activate_chart(weekly_label, weekly_data);
      activateClass(e.target);
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

// // Autocomplete search
$(function() {
    var userNames = [
      "Victoria Chambers",
      "Dale Byrd",
      "Dawn Wood",
      "Dan Oliver"
    ];
    $( "#userField" ).autocomplete({
      source: userNames
    });
  } );

  //LOCAL STORAGE
  const emailNotification = document.getElementById('emailNotification');
  const profilePublic = document.getElementById('profilePublic');
  const timezone = document.getElementById('timezone');
  const save = document.getElementById('save');
  const cancel = document.getElementById('cancel');


const mailStorage = localStorage.getItem('emailNotification');
if (mailStorage && mailStorage === "true") {
  emailNotification.checked = true;
} else {
  emailNotification.checked = false;
}

const profileStorage = localStorage.getItem('profilePublic');
if (profileStorage && profileStorage === "true") {
  profilePublic.checked = true;
} else {
  profilePublic.checked = false;
}

timezone.value = localStorage.getItem('timezone');

save.addEventListener("click", () => {
  event.preventDefault();
  console.log("save button clicked");
  localStorage.setItem('emailNotification', emailNotification.checked);
  localStorage.setItem('profilePublic', profilePublic.checked);
  localStorage.setItem('timezone', timezone.value);
});

cancel.addEventListener("click", () => {
  event.preventDefault();
  localStorage.clear();
});