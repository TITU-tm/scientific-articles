import './style.css'
const searchInput = document.getElementById('search');

searchInput.oninput = function () {
	let searchValue = this.value.trim().toLowerCase();
	let searchItems = document.querySelectorAll('.searchItems');
	if (searchValue !== '') {
		searchItems.forEach((element) => {
			if (element.children[0].children[0].children[0].innerText.toLowerCase().includes(searchValue)) {
				element.classList.remove('hidden')
			}
			else {
				element.classList.add('hidden');
			}
		})
	} else {
		searchItems.forEach((element) => {
			element.classList.remove('hidden');
		})
	}
}