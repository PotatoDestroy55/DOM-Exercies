const d = document,
w = window;

export default function scrollTopButton(btn)
{
	const $scroll = d.querySelector(btn);

	w.addEventListener("scroll", e =>
	{
		let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

		if (scrollTop > 600)
		{
			$scroll.classList.remove("hidden");
		}
		else
		{
			$scroll.classList.add("hidden");
		}
	})
	d.addEventListener("click", e =>
	{
		if(e.target.matches(btn))
		{
			w.scrollTo(
				{
					behavior: "smooth",
					top: 0
				}
			)
		}
	})
}