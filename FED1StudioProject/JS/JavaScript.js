

$(function () {

$(".thumb").on("click", function () {//grab all objects with a class of thumb collecting data from the img source when they click on the image

    var imgSource = $(this).attr("src");
    //console.log("imgSource: " + imgSource); check if it is capturing the stuff
    //make reference to lightbox content

    var imgString = "<img src='" + imgSource + "' class='img-responsive' />"
    console.log("imgString: " + imgString);

    $("#lightbox-content").html(imgString);


    //$("#lightbox-content").html("<img src='" + imgSource + "' class='img-responsive' />"); //trying to creat an html object but you're doing it in string

    // make lightbox visible by fading it ia
    $("#lightbox-container").fadeIn(500);

    // when the user clicks anywhere in the #lightbox-container then fadeout()
    $("#lightbox-container").on("click", function () {
        $(this).fadeOut(500);
    })

});