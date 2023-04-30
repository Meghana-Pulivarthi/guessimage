window.onload = init;
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
        images[i].onmousemove = showAnswer;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    // console.log(image.id);
    var name = image.id;
    name = name + ".jpg";
    image.src = name;
    console.log(name);
    // setTimeout(closeAnswer, 2000, image);
    setTimeout(
        function (image) {
            var name = image.id;
            name = name + "blur.jpg";
            image.src = name;
        },
        2000,
        image
    );
}
//instead using a closure above by passing a function to a function
// function closeAnswer(image) {
//     var name = image.id;
//     name = name + "blur.jpg";
//     image.src = name;
// }
setTimeout(timeHandler, 5000);
