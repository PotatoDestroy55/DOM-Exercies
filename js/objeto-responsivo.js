const d = document,
	w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent)
{
	let breakpoint = w.matchMedia(mq);

	const $div = d.getElementById(id);

	const responsive = (e) => 
	{
		//console.log(e.matches);
		if(e.matches)
		{
			$div.innerHTML = desktopContent;
			
		}
		else
		{
			$div.innerHTML = mobileContent;
		}
		//console.log(breakpoint);
	};

	breakpoint.addEventListener("change", responsive);

	responsive(breakpoint);
}