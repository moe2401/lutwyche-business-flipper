let i = 0;
let images = [];
let time = 3000;

//image list
images[0] = "img/artisan.jpeg";
images[1] = "img/auzus.jpeg";
images[2] = "img/barber-shop.jpeg";
images[3] = "img/bestnails.jpeg";

//change image
function changeImg(){
    document.getElementById("main-img").style.backgroundImage = "url(" + images[i] + ")";
    // document.getElementById("main-img").style.backgroundImage = images[i];

    if(i < images.length - 1){
        i++;
    } else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onlaod = changeImg();
