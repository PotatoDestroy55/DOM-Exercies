
export default function searchFilters(input, selector)
{
	const d = document;

	d.addEventListener("keydown", (e) => {
		
		if (e.key === "Escape") e.target.value = "";

		if (e.target.matches(input)) {
			//console.log(e.key);
			d.querySelectorAll(selector).forEach(el => el.textContent.toLowerCase().includes(e.target.value) 
			? el.classList.remove("filter") 
			: el.classList.add("filter")
			);
		}
	});
}