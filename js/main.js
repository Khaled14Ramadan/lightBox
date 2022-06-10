let items = document.getElementsByClassName("item");
let lightbox = document.getElementById("lightbox");
let content = document.getElementById("content");
let leftt = document.getElementById("leftt");
let rightt = document.getElementById("rightt");
let closebtn = document.getElementById("close");

let flag=0;

for (let i=0 ; i <items.length ; i++)
{
    items[i].addEventListener('click' , function(e){
        console.log("hello"+ i);
        lightbox.classList.remove("hide");
        console.log(e.target);
        let imgx=items[i].querySelector("img").src;
        //imgx = "images/client2.jpg";
        console.log(imgx);
        content.style.backgroundImage = `url(${imgx})`;
        // imgx={src:"images/client2.jpg"};
        // console.log(imgx);
        // content.style.backgroundImage = "none";
        // content.style.backgroundColor = "red";
        flag=i;
    });
}

closebtn.addEventListener('click', function(){
    lightbox.classList.add("hide");
});

function prev()
{
    if(flag > 0)
    {
        flag--;
    }
    let imgx=items[flag].querySelector("img").src;
    content.style.backgroundImage = `url(${imgx})`;
}

function next()
{
    if(flag <(items.length-1)) {
        flag++;
    }
    let imgx=items[flag].querySelector("img").src;
    content.style.backgroundImage = `url(${imgx})`;
}

leftt.addEventListener('click', function(){
    prev();
    
});

rightt.addEventListener("click" , function(){
   
    next();
});

document.addEventListener('keydown' , function(e){
    console.log(e.code);
    if(e.code === "ArrowRight"){
        next();
    }
    else if(e.code === "ArrowLeft")
        prev()
    else if(e.code === "Escape")
        lightbox.classList.add("hide"); 
});

let f=0;

//click on the lightBox without content
lightbox.addEventListener("click" , function(){
    if(f == 0){
        lightbox.classList.add("hide");
    }
    console.log(f);
    f=0;
}, false);

content.addEventListener("click" , function(){
    f=1;
    console.log(f);
} , false);