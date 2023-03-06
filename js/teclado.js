const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage)
{
	const $ball = d.querySelector(ball),
		  $stage = d.querySelector(stage),
		  limitsBall = $ball.getBoundingClientRect(),
		  limitStage = $stage.getBoundingClientRect();


	switch(e.keyCode)
	{
		case 37:
			// izquierda
			e.preventDefault();
			if(limitsBall.left > limitStage.left) x--;
			break;	
		case 38:
			// arriba
			e.preventDefault();
			if(limitsBall.top > limitStage.top) y--;
			break;
		case 39:
			// derecha
			e.preventDefault();
			if(limitsBall.right < limitStage.right) x++;
			break;
		case 40:
			// abajo
			e.preventDefault();
			if(limitsBall.bottom < limitStage.bottom) y++;
			break;

		default:

			break;
	}
	$ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shorcuts(e) {

	if(e.key === "a" && e.altKey)
	{
		alert("Haz presionado el atajo de alerta con el teclado");
	}

	if(e.key === "c" && e.altKey)
	{
		confirm("Haz presionado el atajo de confirmación con el teclado");
	}

	if(e.key === "p" && e.altKey)
	{
		prompt("Haz presionado el atajo de aviso con el teclado");
	}

}
