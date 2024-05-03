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

//selction des differents élements

//Images
const bannerImg = document.querySelector(".banner-img");
console.log("banner-img");
//TagLine
const tagLine = document.querySelector("#banner p")
//Flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
console.log("arrowLeft");
console.log("arrowRight");
//Dots
let dots = document.querySelector(".dots");
let dotSelected = document.querySelector(".dot_selected");
// index actuel de la position span
let position = 0;

const path = "../assets/images/slideshow/";
/*Côté animation*/
// boucle for
for (let index = 0; index < slides.length; index++) {
	console.log(slides[index])
}
function udapteDot(){
	dots.innerHTML = "";
	slides.forEach((slide, index) => {
		console.log(slide);
		const dot = document.createElement("div");
		if(index === position){
			dot.classList.add("dot_selected");
		}
		dot.classList.add("dot");
		dots.appendChild(dot);
		
	});
}

udapteDot();

//FLECHE GAUCHE
arrowLeft.addEventListener("click", () => {
	position--;

	if (position < 0) {
		position = slides.length - 1;
	}
	udapteDot();
	updateSlide();
		console.log(slides[position])
})

 //FLECHE DROITE


 arrowRight.addEventListener("click", ()=>{
	position ++;
	if(position >= slides.length){
		position = 0;
	}
	udapteDot();
	updateSlide();
	console.log(slides[position])
});

//Essais fleche droite pour le slide
function updateSlide(){
	const currentSlide = slides[position]; 
	bannerImg.src = path+currentSlide.image;
	
	tagLine.innerHTML = currentSlide.tagLine;

}

/* Projet Ok */
