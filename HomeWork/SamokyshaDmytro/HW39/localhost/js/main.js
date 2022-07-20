async function responseFetch(){
	let response = await fetch('http://localhost/json/photo.json');
	let content = await response.json();
	content = content.splice(0,8);
	
	let list = document.querySelector('.posts');
	
	let key;
	
	for(key in content){
		list.innerHTML +=`

			<div class="col-xl-4 col-lg-4 col-md-4 card">
			<div class="contain">
				<h2>${content[key].title}</h2>
				<div class="imgcont">
					<img src="${content[key].url}"/>
				</div>
				<p>${content[key].price}</p>
				<button>Придбати</button>
				</div>
			</div>

	`
	}
}

responseFetch()


async function books() {
	let response = await fetch('http://localhost/json/book.json');
	let content = await response.json();
let list = document.querySelector('.books');
let key;
for(key in content){
	let info = content[key];
	
	for(let book in info){
		console.log(info[book])
		list.innerHTML +=`
 	<h2> Avtor: ${info[book].Avtor}</h2>
 	<p>BookName: ${info[book].BookName}</p>
	<p>Citizen: ${info[book].Citizen}</p>
	<hr>
 	`
	}
}
}
books();