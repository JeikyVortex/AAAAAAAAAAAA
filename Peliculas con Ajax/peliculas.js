const $actionContainer=document.querySelector('#action');
let cualquiercosa='';
//for(let i=1;i<=80;i++){ //hasta 80 pokemons
	let i=1
	cualquiercosa2="https://yts.am/api/v2/list_movies.json?genre=action";
	$.ajax(cualquiercosa2,{
		method: 'GET',
		success:function(data){
			console.log(data);
			/*console.log(data.forms[0].name);
			console.log(data.sprites.back_default);
			console.log(cualquiercosa);
			cualquiercosa=mostrar(data.forms[0].name,data.sprites.back_default,data.weight);
			const variable1=document.implementation.createHTMLDocument();//crea un html
			variable1.body.innerHTML=cualquiercosa;//mete los datos de cualquiercosa dentro del html especificamente donde esta el body
			$actionContainer.append(variable1.body.children[0]); //el children[0] es lo primero que encuentre 
			*/},
    	error: function(error){ //en caso de que no logre obtener los datos
        console.log(error);
		}
	})
//} 
function mostrar(nombre,imagen,peso){ //cualquiercosa=mostrar(data.forms[0].name,data.sprites.back_default,data.weigth)
	return(
		`<div class="box">
        <img src="${imagen}" width="200" heigth="200">
        <h2>nombre del pokeweon: ${nombre}</h2>
        <h3>pesa: ${peso}</h3>
        </div>`
		)
}