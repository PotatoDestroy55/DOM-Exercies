const d = document,
	n = navigator;

export default function getGeolaction (id)
{
	const $id = d.getElementById(id),
		options = 
		{
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

	const success = position => 
	{
		console.log(position);
		
	};

	const error = err => 
	{
		console.log(err);
		$id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
	};


	n.geolocation.getCurrentPosition(success, error, options);
}