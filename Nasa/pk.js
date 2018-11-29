const $actionContainer=document.querySelector('#action');
let cualquiercosa='';
	
	let i=1
	cualquiercosa2="http://api.wundeground.com/api/ACCESS_KEY/conditions/forecast/"
	cualquiercosa2="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"
	$.ajax("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5",{
		method: 'GET',
		success:function(data){
			console.log(data);
			//el children[0] es lo primero que encuentre 
			},
    	error: function(error){ //en caso de que no logre obtener los datos
        console.log(error);
		}
	}) 
function mostrar(nombre,imagen,peso){ //cualquiercosa=mostrar(data.forms[0].name,data.sprites.back_default,data.weigth)
	return(
		`<div class="box">
        <img src="${imagen}" width="200" heigth="200">
        <h2>nombre del pokeweon: ${nombre}</h2>
        <h3>pesa: ${peso}</h3>
        </div>`
		)
}