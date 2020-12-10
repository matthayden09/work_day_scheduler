// variables
var currentDay = moment().format('LL');

// current date
$("#currentDay").text(currentDay)

// button click
$('#nineBtn').on('click', function(event){
    var nineText = $('#nineText').val();
    
    event.preventDefault()
    // saved text goes to local storage
    localStorage.setItem('9AM', nineText);
    
})
// retrieve from local storage
$('#nineText').val(localStorage.getItem('9AM'))


