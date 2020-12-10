var currentDay = moment().format('LL');

$("#currentDay").text(currentDay)

// variables
// when I click button
$('#btn').on('click', function(event){
    var text = $('#text').val();
    event.preventDefault()
    localStorage.setItem('9AM Input', text);
    

    console.log(event)
})
// inner text is selected
// saved text goes to local storage
