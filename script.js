let currentIndex = 0;
const heroArr = [
	{
		img: "./images/desktop-image-hero-1.jpg",
		header: "Discover innovative ways to decorate",

		paragraphText:
			"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
	},
	{
		img: "./images/desktop-image-hero-2.jpg",
		header: "We are available all across the globe",

		paragraphText:
			"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
	},
	{
		img: "./images/desktop-image-hero-3.jpg",
		header: "Manufactured with the best materials",

		paragraphText:
			"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
	},
];

// ********* Sidebar

const toggleMenuOpen = document.querySelector(".toggle-menu-btn");
const toggleMenuClose = document.querySelector(".toggle-menu-close");
const mobileNav = document.querySelector(".mobile-nav");
const slideBtnRight = document.querySelector(".slider-btn-right");
const slideBtnLeft = document.querySelector(".slider-btn-left");

// ********* Hero

const heroImage = document.querySelector(".image-in-hero");
const heroHeader = document.querySelector(".hero-header");
const heroText = document.querySelector(".hero-text");

toggleMenuOpen.addEventListener("click", function () {
	mobileNav.classList.toggle("active");
});
toggleMenuClose.addEventListener("click", function () {
	mobileNav.classList.remove("active");
});

function render(index) {
	heroImage.src = heroArr[index].img;
	heroHeader.innerHTML = heroArr[index].header;
	heroText.innerHTML = heroArr[index].paragraphText;
}

render(currentIndex);

slideBtnRight.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % heroArr.length;
	render(currentIndex);
});

slideBtnLeft.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + heroArr.length) % heroArr.length;
	render(currentIndex);
});
