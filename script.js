const cont = document.querySelector('.main-container');
const mobileMenu = document.querySelector('.mobile-menu');

const navMenu = document.querySelector('.nav-menu');
const menuContent = document.querySelector('.menuContent');

const overlayContainer = document.querySelector('.overlay-container');

//toggle mobile menu
mobileMenu.addEventListener('click', function(){
	
	
	navMenu.classList.toggle('menuContent');
	mobileMenu.classList.toggle('open');
	overlayContainer.classList.toggle('overlay');
	
	
});