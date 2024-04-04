const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//selction des differents elements
//Images
const bannerImg = document.querySelector('.banner-img');
//Flèches
const arrowLeft=document.querySelector(".arrow_left");
const arrowRight=document.querySelector(".arrow_right");
//Points
const dot=document.querySelector(".dot");

// boucle for
for (let index =0; index < slides.length; index++){
	console.log(slides[index])
}
slides.forEach(slide => {
	console.log(slide);
})

let position = 0;


arrowLeft.addEventListener("click", function(){
	position --;
	if(position < 0){
		position = slides.length - 1;
	}
	console.log(slides[position])

})

arrowRight.addEventListener("click", function(){
	position ++;
	if(position >= slides.length){
		position = 0;
	}
	console.log(slides[position])
})


