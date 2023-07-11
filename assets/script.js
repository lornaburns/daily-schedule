$(function () {
    //saves entries in local storage
    $("button").click(function () {
      var scheduleBlock = $(this).parent().attr("id");
      var txt = $(this).siblings("textarea").val();
      localStorage.setItem(scheduleBlock, txt);
    });

    // display the text from local storage in each schedule block
    $("#09 .description").val(localStorage.getItem("09"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    //defines colorCode function based on current time
    function colorCode() {
      var currentTime = dayjs().format("HH");
      console.log(currentTime);
      //inserts current date in header
      $(".currentDay").text(dayjs().format("dddd MM/DD/YYYY"));
      //checks each time-block and compares it to current time to apply class
      $(".time-block").each(function () {
        var timeBlock = $(this).attr("id");
        var blockHour = parseInt (timeBlock.substring(0, 2));

        $(this).removeClass("past present future");

        if (timeBlock < currentTime) {
          $(this).addClass("past");
        } else if (timeBlock === currentTime) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
  
    });
  }
    colorCode();



});