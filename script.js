var eventsData = {};

var savedData = {};


var today = moment();


//This function sets the color block based on the time
function setHourColors() {
    var now = moment();

    for (var i = 9; i< 18; i++) {
        if (i < now.hour()) {
            $("#hour-" + i).addClass("past");
        }
        else if (i == now.hour()) {
            $("#hour-" + i).addClass("present");
        }
        else if (i > now.hour()) {
            $("#hour-" + i).addClass("future");
        }
    }
}

function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (eventsData !== null) {
        savedData = eventsData;
    }
    else {
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",
        }
    }
    generateTable();
}

function generateTable() {
    for (var i = 9; i < 18; i++) {
        var textBlock = $('#hour' + i);
        textBlock.text(savedData["hour" + i]);
    }
}

function handleSaveClick(event) {
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    //modify data object
    eventsData["hour" + hour] = value;


    //store this in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}


$('.saveBtn').on('click', handleSaveClick);

//Set current date on page
$('#currentDay').text(today.format('MMMM Do YYYY'));

//initial functions
$(function() {
    loadStoredData();
    setHourColors();
});

