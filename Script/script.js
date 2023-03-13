//selectors!!
const dateEl = $('#currentDay');


$(document).ready(function () {
 
  //displays current date
  function currentDate() {
    const rightNow = dayjs().format('dddd, MMMM Do');
    dateEl.text("Today is " + rightNow);
  }

  
  //save function adds description to storage
  $('.saveBtn').on('click', function(event) {
    event.preventDefault();
    const timeBlock = $(this).parent();
    const scheduleItem = timeBlock.find('.description').val();
    const id = timeBlock.attr('id');
    localStorage.setItem(id, scheduleItem);
  });


  //checks time to determine whether block is in the past, current, or future
  let currentHour = dayjs().hour();
  for (let i = 9; i <= 17; i++) {
    const hourElement = document.getElementById(`hour-${i}`);

    if(i < currentHour) {
      $(`#hour-${i}`).addClass("past");
    }

    else if(i === currentHour) {
      $(`#hour-${i}`).addClass("present");
    }

    else {
      $(`#hour-${i}`).addClass("future");
    };
  }
  console.log("the current hour is " + currentHour);

//displays content in textArea from local storage
  $(".time-block").each(function () {
    const hour = $(this).attr("id"); 
    const textArea = $(this).children(".description");
    const userInput = localStorage.getItem(hour);
    
    if (userInput) {
      textArea.val(userInput);
    }
  });
  currentDate();
});