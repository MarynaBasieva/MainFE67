

async function getResponse() {
	let response = await fetch('http://HM38-39/json/book.json');
	let content = await response.json();
let list = document.querySelector('.book');
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
getResponse();


async function getPhoto() {
	let response2 = await fetch('http://HM38-39/json/photo.json');
	let content2 = await response2.json();
		let list2 = document.querySelector('.shop_box');
		let key2;
			for(key2 in content2){
				list2.innerHTML +=`
				<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 shop_child">
					<div class="photo">
						<img src="${content2[key2].url}" alt="404">
					</div>
					<div class="text">
						<h3>${content2[key2].title}</h3>
						<p>${content2[key2].price}</p>
						<button class="shop_btn">Придбати</button>
					</div>
				</div>
				`
				
			}
}
getPhoto();
