const imagenes = document.querySelectorAll(".img-gallery")
const imgLight = document.querySelector(".add-img")
const contenedorLight = document.querySelector(".img-light")
const menu1 = document.querySelector(".menu")

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click', (e) => {
	if(e.target !== imgLight) {
		contenedorLight.classList.toggle("show")
		imgLight.classList.toggle("showImage")
		menu1.style.opacity = '1'
	}
})

const aparecerImagen = (imagen) => {
	console.log(imagen)
	imgLight.src = imagen
	console.log(imgLight)
	contenedorLight.classList.toggle("show")
	imgLight.classList.toggle("showImage")
	menu1.style.opacity = '0'
}