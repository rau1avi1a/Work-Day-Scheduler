var eventsData

function setHourColors() {
    var now = dayjs();

    for (var i = 9; i< 18; i++) {
        if (i < now.hour()) {
            $("#hour" + i + " textarea").addClass("past");
        }
        else if (i == now.hour()) {
            $("#hour" + i + " textarea").addClass("present");
        }
        else if (i > now.hour()) {
            $("#hour" + i + " textarea").addClass("future");
        }
    }
}

function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour9: "",
            hour10: ""
        }
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


$('.saveBtn').on('click', )


$(function() {
    loadStoredData();
    setHourColors();
});

