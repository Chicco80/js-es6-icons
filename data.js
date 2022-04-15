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
 //utility random number
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
 };

function getRandomColor() {
	const symbols = '0123456789ABCDEF';
	const lastSimbolIndex = symbols.length -1;
	let color = '#';
	for (let i = 0; i < 6; i++) {
		const randomIndex = getRandomInt(0, lastSimbolIndex);
		const randonSymbol = symbols.charAt(randomIndex);
	  color += randonSymbol;
	}
	return color;
  }

  const row = document.getElementById("row");
  let boxCard = "";
   
icons.forEach((element)=>{
	element.color = getRandomColor()
});

function print(selectedIcons){
	row.innerHTML = "";
 selectedIcons.forEach((element)=>{
	 boxCard = `
	<div class="box col-5 m-2">
	  <i class="${element.family} ${element.color} ${element.prefix + element.name}">
	   <p class="font">${element.name}</p>
	  </i>
	</div>
	 `;
	 row.innerHTML += boxCard;
	//  console.log(boxCard);
 })
}
print(icons);

const seleziona = document.getElementById("slc");
//   console.log(slc);
  seleziona.addEventListener("change", function(){
	  const iconType = this.value;
	  
		const selectedIcons = icons.filter((icona)=>{
			if(icona.type === iconType || !iconType){
				return true ;
			}else{
				return false;
			}
		});
		print(selectedIcons);
  });


 
	






