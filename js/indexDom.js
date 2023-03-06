import scrollTopButton from "./boton-scroll.js";
import countdown from "./cuenta-regresiva.js";
import userDeviceInfo from "./deteccion-dispositivos.js";
import networkStatus from "./deteccion-red.js";
import webcam from "./deteccion-webcam.js";
import hamburgerMenu from "./ejercicios-hamburguesa.js";
import searchFilters from "./filtro-busquedas.js";
import getGeolaction from "./geolocalizacion.js";
import responsiveMedia from "./objeto-responsivo.js";
import responsiveTester from "./prueba-responsive.js";
import { digitalClock, alarm} from "./reloj.js";
import { moveBall, shorcuts } from "./teclado.js";
import darkTheme from "./tema_obscuro.js";

const d = document,
birthDate = "June 22, 2023 07:00:00";

d.addEventListener("DOMContentLoaded", e =>
{

	hamburgerMenu(".panel-btn", ".panel" , ".menu a");
	digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
	alarm("resources/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
	countdown("countdown", birthDate, "¡Feliz cumpleaños Kevin!");
	scrollTopButton(".scroll-top-btn");
	responsiveMedia(
		"youtube", 
		"(min-width: 1024px)", 
		`<a href = "https://youtu.be/HD0Hv9A3md4" target = "_blank" rel = "noopener">Ver video</a>`, 
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/HD0Hv9A3md4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);

	responsiveMedia(
		"gmaps", 
		"(min-width: 1024px)", 
		`<a href = "https://goo.gl/maps/jg33kvA1TsYHRWvC6" target = "_blank" rel = "noopener">Ver Mapa</a>`, 
		`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.485414822324!2d-88.30609144993895!3d18.52341742680113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba4ab1b8e835d%3A0x847731bd399905be!2sTecNM%20-%20Campus%20Chetumal!5e0!3m2!1ses-419!2smx!4v1677777760656!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

	responsiveTester("responsive-tester");
	userDeviceInfo("user-device");
	webcam("webcam");
	getGeolaction("geolocation");
	searchFilters(".card-filter", ".card");
})

darkTheme(".dark-theme-btn", "dark-mode");


d.addEventListener("keydown", e =>
{
	shorcuts(e);
	moveBall(e,".ball",".stage")
})

networkStatus();
