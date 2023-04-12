const burger = Array.from(document.getElementsByClassName('js-burger'));
const dropNav = Array.from(document.getElementsByClassName('js-dropdown-menu'));
const slickOptions = {
	arrows: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
	],
}



// BURGER MENu
burger.forEach(item => {
	item.addEventListener('click', dropDown)
});

function dropDown() {
	burger.forEach(item => {
		item.classList.toggle('is-active');
	});
	dropNav.forEach(item => {
		item.classList.toggle('is-active');
	});
	document.body.classList.toggle('js-is-lock');
};

//let menuLinks = Array.from(document.getElementsByClassName('menu__link[data-goto]'));
//menuLinks.forEach(menuLink => {
//	menuLink.addEventListener("click", onMenuLinkClick);
//});
//
//function onMenuLinkClick(goToLink) {
//	let menuLink = goToLink.target;
//
//	let goToBlock = Array.from(document.getElementsByClassName('menuLink.dataset.goto'));
//	let goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
//	// Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport + колличество прокрученых пикселей - высота шапки
//
//
//	document.body.classList.remove('js-is-lock')
//	burger.classList.remove('is-active');
//	dropNav.classList.remove('is-active');
//
//
//	window.scrollTo({
//		top: goToBlockValue,
//		behavior: "smooth"
//	});
//	goToLink.preventDefault();
//}




//STICKY-HEADER
window.addEventListener("scroll", function () {
	const header = Array.from(document.getElementsByClassName('header'));
	header.forEach(item => {
		item.classList.toggle("js-sticky", window.scrollY > 0);
	})
})



//GOOGLE MAP
function initMap() {
	const myMap = document.getElementById('map__body')
	const coordinates = { lat: 55.79844876849283, lng: 37.61759353911547 }
	const correctZoom = 10

	const map = new google.maps.Map(myMap, {
		center: coordinates,
		zoom: correctZoom,
	});
	const marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		icon: 'img/icon/Pin.png'
	});
}
window.initMap = initMap



//SLIDER
$('.js-slider').slick(slickOptions)



//ACCORDION
const accordionBody = Array.from(document.getElementsByClassName('js-accordion-body'));
const accordionItem = Array.from(document.getElementsByClassName('js-accordion'));
accordionItem.forEach(el => {
	el.addEventListener('click', (e) => {
		e.preventDefault()
		accordionItem.forEach(item => {
			item.style.setProperty('--height', `0px`)
			if (item !== el) {
				item.classList.remove('is-active')
			}
		});
		const body = el.getElementsByClassName('js-accordion-body')[0]
		el.classList.toggle('is-active')
		if (el.classList.contains('is-active')) {
			el.style.setProperty('--height', `${body.scrollHeight}px`)
		}
	})
})





