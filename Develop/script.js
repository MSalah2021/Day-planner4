$(init);

function init() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    colorTimeBlocks();
    setInterval(colorTimeBlocks, 10000);

    $(".time-block").each(function () {
        var blockId = $(this).attr("id");

        $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
    });
    $(".saveBtn").on("click", handleSave);
}

function colorTimeBlocks() {

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
        var currentHour = parseInt(moment().format("H"));

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour > currentHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

function handleSave() {
    var hourId = $(this).parent().attr("id");
    localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
}