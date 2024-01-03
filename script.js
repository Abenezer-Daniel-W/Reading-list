const myLibrary = [];

const IO = document.querySelector(".io");
const bookList = document.querySelector(".book-list");
const bod = document.querySelectorAll("body");
const closeForm = document.getElementById("closeForm");
const titleInput = document.querySelector("#titleIO");
const authorInput = document.querySelector("#authorIO");
const numberInput = document.querySelector("#numberIO");
const statusInput = document.querySelector("#statusIO");
const btnInput = document.getElementById("btnIO");
const btnNew = document.getElementById("new");
const btnRemove = [];

btnInput.addEventListener("click", () => addBookToLibrary());
btnNew.addEventListener("click", () => addBook());
closeForm.addEventListener("click", function() {
	IO.style.display ="none";
	const myElement = document.body;
	for (const child of myElement.children) {
		child.style.filter = "blur(0px)";
	}
});


class Book{
	constructor(title, author, page, status) {
		this.title = title;
		this.author = author;
		this.page = page;
		this.status = status;
}
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
	
	addCard();
	
}

function addCard(){
	let num = myLibrary.length-1;
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
	let btnImg = document.createElement("img");
	btnImg.src = "img/close_FILL0_wght400_GRAD0_opsz24.svg";
	btn.appendChild(btnImg);
	btn.setAttribute("id", "btn"+num);
	btn.className = "remove";
	btndiv.appendChild(btn);
	div.appendChild(btndiv);

	bookList.appendChild(div);

	let btnR = document.getElementById("btn"+num);
	
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
	console.log(myLibrary.length)
	let temp = e.target.parentNode.id;
	let index = parseInt(temp.charAt(temp.length -1));

	myLibrary.splice(index, 1);
	console.log(myLibrary.length)

	let bookList = document.querySelector(".book-list");
	let list = document.querySelectorAll(".book-list > *");

	list.forEach(function(child){ 
		if(child.id == "card-"+(index)){
			bookList.removeChild(child);
		}
	});

}