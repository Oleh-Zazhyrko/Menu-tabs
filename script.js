const menuSections = document.querySelectorAll(".menu-section");
const menuTabs = document.querySelectorAll(".menu-tab");

const showInfo = (id) => {
	menuSections.forEach((section) => (section.style.display = "none"));
	menuTabs.forEach((tab) => tab.classList.remove("menu-tab-active"));
	document.getElementById(id).style.display = "block";

	const currentActiveBtn = document.querySelector(`[data-id=${id}]`);
    console.log(currentActiveBtn);
	currentActiveBtn.classList.add("menu-tab-active");
};