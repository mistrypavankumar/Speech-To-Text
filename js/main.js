// pre-loader //

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("loader").style.overflow = "hidden";
}


// logo animation//

function bigImg(x) {
    x.style.height = "150px";
    x.style.transitionDuration = "1s";
    x.style.cursor = "pointer";
}

function normalImg(x) {
    x.style.height = "100px";
}