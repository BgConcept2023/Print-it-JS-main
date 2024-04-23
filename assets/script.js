const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);

//selction des differents elements

//Images
const bannerImg = document.querySelector(".banner-img");
console.log("banner-img");
//TagLine
const tagLine = document.querySelector(["tagLine"])
//Flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
console.log("arrowLeft");
console.log("arrowRight");

//Dots
let dots = document.querySelector(".dots");
let dotSelected = document.querySelector(".dot_selected")
let html = `
	<div class="dot_selected"></div>
		<div class="dot"></div>
		<div class="dot"></div>	
		<div class="dot"></div>	
		<div class="dot"></div>	
	
 `
dots.innerHTML = html;

/*Côté animation*/

// index actuel de la position slide
let currentIndex = 0;

// index actuel de la position span
let position = 0;

// boucle for
for (let index = 0; index < slides.length; index++) {
	console.log(slides[index])
}
slides.forEach(slide => {
	console.log(slide);

});


//FLECHE GAUCHE
arrowLeft.addEventListener("click", () => {
	position--;

	if (position < 0) {
		position = slides.length - 1;
	}

		console.log(slides[position])
})

 //FLECHE DROITE


 arrowRight.addEventListener("click", ()=>{
	position ++;
	if(position >= slides.length){
		position = 0;
	}
	console.log(slides[position])
})

//Essais fleche droite
//  function clickRight(){
// 	 arrowRight.addEventListener("click", () => {
// 		 position++;
// 		 image.src = slides[currentIndex].imageSrc;
		 
// 		});
// 	}
// clickRight();


