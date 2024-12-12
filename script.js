const rating_page = document.querySelector(".rating");
const submitBtn = rating_page.querySelector(".btn");
const radioBtns = rating_page.querySelectorAll(".rating__option");
const radioBtns_labels = rating_page.querySelectorAll(".rating__option-label");
const thanks_page = document.querySelector(".thanks");

const ACTIVE = "active";
const HIDE = "none";
const SHOW = "flex";

function radioBtnsHandler(e) {
	radioBtns_labels.forEach((label) => {
		if (label.getAttribute("for") === e.target.getAttribute("for"))
			label.classList.add(ACTIVE);
		else label.classList.remove(ACTIVE);
	});
	radioBtns.forEach((btn) => {
		if (e.target.getAttribute("for") === btn.id) btn.classList.add(ACTIVE);
		else btn.classList.remove(ACTIVE);
	});
	submitBtn.removeAttribute("disabled");
}

function submitBtnHandler(e) {
	e.preventDefault();
	rating_page.style.display = HIDE;
	thanks_page.style.display = SHOW;

	const ratingEl = thanks_page.querySelector(".thanks__rating");
	const chosenRatingEl = rating_page.querySelector("input.active");
	ratingEl.textContent = chosenRatingEl.id;
}

radioBtns_labels.forEach((label) => {
	label.addEventListener("click", radioBtnsHandler);
});

submitBtn.addEventListener("click", submitBtnHandler);
