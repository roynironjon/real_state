function toggleAnswer(element) {
    var answer = element.nextElementSibling;

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

// Function to update date and time
function updateDateTime() {
    // Create a new Date object
    var now = new Date();

    // Extract date and time components
    var date = now.toDateString();
    var time = now.toLocaleTimeString();

    // Get the div element to display date and time
    var dateTimeDisplay = document.getElementById('datetime');

    // Set the content of the div element to the current date and time
    dateTimeDisplay.textContent = 'Date: ' + date + ' | Time: ' + time;
}

// Call the function initially
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);


// owalcursor slider js code
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$(function(){
    $('#menu').slicknav();
});