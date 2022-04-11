const icons =
[
 	{
 		name: 'cat',
 		prefix: 'fa-',
 		type: 'animal',
 		family: 'fas',
 		color: 'orange'
 	},
 	{
 		name: 'crow',
 		prefix: 'fa-',
 		type: 'animal',
 		family: 'fas',
 		color: 'orange'
 	},
 	{
 		name: 'dog',
 		prefix: 'fa-',
 		type: 'animal',
 		family: 'fas',
 		color: 'orange'
 	},
 	{
 		name: 'dove',
 		prefix: 'fa-',
 		type: 'animal',
 		family: 'fas',
 		color: 'orange'
 	},
 	{
 		name: 'dragon',
 		prefix: 'fa-',
 		type: 'animal',
 		family: 'fas',
 		color: 'orange'
 	},
 	{
 		name: 'horse',
 		prefix: 'fa-',
 		type: 'animal',
 		family: 'fas',
 		color: 'orange'
 	},
 	{
 		name: 'hippo',
 		prefix: 'fa-',
 		type: 'animal',
 		family: 'fas',
 		color: 'orange'
 	},
 	{
 		name: 'fish',
 		prefix: 'fa-',
 		type: 'animal',
 		family: 'fas',
 		color: 'orange'
 	},
 	{
 		name: 'carrot',
 		prefix: 'fa-',
 		type: 'vegetable',
 		family: 'fas',
 		color: 'green'
 	},
 	{
 		name: 'apple-alt',
 		prefix: 'fa-',
 		type: 'vegetable',
 		family: 'fas',
 		color: 'green'
 	},
 	{
 		name: 'lemon',
 		prefix: 'fa-',
 		type: 'vegetable',
 		family: 'fas',
 		color: 'green'
 	},
 	{
 		name: 'pepper-hot',
 		prefix: 'fa-',
 		type: 'vegetable',
 		family: 'fas',
 		color: 'green'
 	},
 	{
 		name: 'user-astronaut',
 		prefix: 'fa-',
 		type: 'user',
 		family: 'fas',
 		color: 'blue'
 	},
 	{
 		name: 'user-graduate',
 		prefix: 'fa-',
 		type: 'user',
 		family: 'fas',
 		color: 'blue'
 	},
 	{
 		name: 'user-ninja',
 		prefix: 'fa-',
 		type: 'user',
 		family: 'fas',
 		color: 'blue'
 	},
 	{
 		name: 'user-secret',
 		prefix: 'fa-',
 		type: 'user',
 		family: 'fas',
 		color: 'blue'
 	}
 ];
//  console.log(icons)
 /*<div class="box col-5 m-2">
  <i class="fa-solid fa-cat"><p>cat</p></i>
 </div> */
  const row = document.getElementById("row");
 let boxCard = "";

 icons.forEach((element)=>{
	 boxCard = `
	<div class="box col-5 m-2">
	  <i class="${element.family} ${element.prefix + element.name}">
	  <p class="font">${element.name}</p>
	  </i>
	</div>
	 `;
	 row.innerHTML += boxCard;
	 console.log(boxCard)
 });

 


//  console.log( element.prefix, element.family, element.name, element.type)