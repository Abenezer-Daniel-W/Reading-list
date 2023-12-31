const myLibrary = [];

const IO = document.querySelector(".io");
const bookList = document.querySelector(".book-list");
const bod = document.querySelectorAll("body");
const titleInput = document.querySelector("#titleIO");
const authorInput = document.querySelector("#authorIO");
const numberInput = document.querySelector("#numberIO");
const statusInput = document.querySelector("#statusIO");
const btnInput = document.getElementById("btnIO");
const btnNew = document.getElementById("new");
const btnRemove = [];

btnInput.addEventListener("click", () => addBookToLibrary());
btnNew.addEventListener("click", () => addBook());



function Book(title, author, page, status) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status;
}

function addBookToLibrary() {
    // do stuff here

    let temptitle = titleInput.value;
    let tempauthor = authorInput.value;
    let temppage = numberInput.value;

	let tempstatus = statusInput.value;

	
    myLibrary.push(new Book(temptitle, tempauthor, temppage, tempstatus));
	IO.style.display = "none";
	
	const myElement = document.body;
	for (const child of myElement.children) {
		child.style.filter = "blur(0px)";
	}
	
	bookList.style.display = "grid";
	let num = myLibrary.length;
	let div = document.createElement("div");
	div.className = "book-card";
	div.setAttribute("id", "card-"+num)


	let temp = myLibrary[myLibrary.length -1]
	for (let val in temp){
		let value = document.createElement("div");
		value.className = val;
		value.innerText = temp[val];
		div.appendChild(value);
	}

	let btndiv = document.createElement("div");
	btndiv.className = "btnCard";
	
	let btn = document.createElement("button");
	let  btnImg = document.createElement("img");
	btnImg.src = "img/close_FILL0_wght400_GRAD0_opsz24.svg";
	btn.appendChild(btnImg);
	btn.setAttribute("id", "btn"+num);
	btn.className = "remove";
	btndiv.appendChild(btn);
	div.appendChild(btndiv);

	bookList.appendChild(div);

	console.log("#btn"+num)
	let btnR = document.getElementById("btn"+num);
	// btnR.addEventListener('click',removeBook );
	
	btnRemove.push(btnR);
	btnRemove[btnRemove.length-1].addEventListener('click',removeBook );
}

function addBook(){

	const myElement = document.body;
	for (const child of myElement.children) {
		if(child.className != "io"){
			child.style.filter = "blur(8px)";
		}
	}
	IO.style.display = "flex";
	
}

const removeBook =  function (e){
	let temp = e.target.parentNode;
	console.log(e.target.parentNode.id);
	// let parentCard = btnRemove.parentNode;

	// let cards = IO.childNodes;
	// for (let card in cards){
	// 	if(card.id =="7"){
	// 		console.log("hey");
	// 	}
	// }
}