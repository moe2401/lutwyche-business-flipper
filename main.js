let i = 0;
let images = [];
let time = 3000;

//image list
images[0] = "img/artisan.jpeg";
images[1] = "img/auzus.jpeg";
images[2] = "img/barber-shop.jpeg";
images[3] = "img/bestnails.jpeg";
images[4] = "img/epic-hair.jpeg";
images[5] = "img/hanesushi.png";
images[6] = "img/hot-bargain.jpeg";
images[7] = "img/iSmart.jpeg";
images[8] = "img/kaisercraft.jpeg";
images[9] = "img/laraghy-and-chan.jpeg";
images[10] = "img/massage-indulgence.jpeg";
images[11] = "img/skin-centre.jpeg";

//change image
function changeImg(){
    document.getElementById("main-img").style.backgroundImage = "url(" + images[i] +")";

    if(i < images.length - 1){
        i++;
    } else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg();
