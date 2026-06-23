// Scroll Reveal Animation


const cards=document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let position=card.getBoundingClientRect().top;


if(position < window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}


});


});



cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="0.8s";

});




// Mobile menu smooth behavior


document.querySelectorAll("a").forEach(link=>{


link.addEventListener("click",()=>{

document.body.style.scrollBehavior="smooth";

});


});