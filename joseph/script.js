var img = document.getElementById('img')
var images = ['africa1.webp', 'africa2.webp','africa3.webp','sunset2.webp','sunset1.jpg']
var x = 0;
function slide (){
    if (x<images.length){
        x = x+1;
    }else{
        x = 1;
    }
    img.innerHTML = "<img src="+images[x-1]+">";
}
setInterval(slide, 3000);