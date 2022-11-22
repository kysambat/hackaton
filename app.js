        //jquery HOW To's
// 1. $(document).ready(() => { (this is how to pass in a function using jquery)
// 2. Target the slideshow using hashtag with the ID then .slick to target the class slick
// 3. to add slick library functionality ----> $('from step 2').slick() 
// 4. to add properties to the slideshow create properties within .slick({})


$(document).ready(() => {
$('#slideshow .slick').slick({
    autoplay:false,
    autoplaySpeed: 1000,
    dots: false,
}
)
    
});
