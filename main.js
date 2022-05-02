let i = 0;
let images = [];
let time = 1000;

//image list
images[0] = "img/artisan.jpeg";
images[1] = "img/auzus.jpeg";
images[2] = "img/barber-shop.jpeg";
images[3] = "img/bestnails.jpeg";

//change image
function changeImg(){
    document.slide.src = images[i];
    // document.getElementById("main-img").style.backgroundImage = images[i];

    if(i < images.length - 1){
        i++;
    } else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}



//create array of images
// let images = ["img/artisan.jpeg", "img/.jpeg", "img/barber-shop.jpeg"];

//automatic changing image
// function change(){
//     i++;
//     if(i >= images.length){
//         i = 0;
//     }
// }
// document.getElementById("main-img").style.backgroundImage = "url(img + [i])" 

//when you click button, image changes
// function clickMe(){
//     document.getElementById("main-img").style.backgroundImage = "url(img/auzus.jpeg)" 
// };

