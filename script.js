// $("button").on("click", function () {
//     var randomNum = Math.floor(Math.random() * 2) + 1;
//     var randomimg = "/images/img" + randomNum + ".png";

//     $("img").attr("src", randomimg);



//     if (randomNum === 1) {
//         $("h1").text("Head Won ....");
//         animationImg();
//         animationText();
//     } else {
//         $("h1").text("tail Won ....");
//         animationImg();
//         animationText();
//     }
// });

// $("#restart").on("click", () => {
//     location.reload();
// });

// function animationImg() {
//        $("#myImage").fadeOut(500, function() {
//             $(this).attr("src", randomimg);
//             $(this).fadeIn(500);
//         });
// }
// function animationText() {
//     $("h1").fadeOut(500, function () {
//         // Change the content once the fade out is complete
//         $(this).text("New Heading");
//         // Fade in the h1 element
//         $(this).fadeIn(500);
//     });
// }

let randomimg;

$("button").on("click", function () {
    const randomNum = Math.floor(Math.random() * 2) + 1; 
    randomimg = "/images/img" + randomNum + ".png";

    $("img").attr("src", randomimg);

    if (randomNum === 1) {
        $("h1").text("Head Won ....");
        animationImg();
        animationText();
    } else {
        $("h1").text("Tail Won ....");
        animationImg();
        animationText();
    }
});

$("#restart").on("click", () => {
    location.reload();
});

function animationImg() {
    $("#myImage").fadeOut(500, function() {
        $(this).attr("src", randomimg);
        $(this).fadeIn(500);
    });
}

function animationText() {
    $("h1").fadeOut(500, function () {
        $(this).fadeIn(500);
    });
}
