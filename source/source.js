const button1Test = document.getElementById("but1");
console.log(button1Test)

let createdTable=false;
let counter=0;
let tableLink;

button1Test.addEventListener("click" , function(){
let a=document.getElementById("a").value*1;
let b=document.getElementById("b").value*1 ;
let c=document.getElementById("c").value*1 ;

let d = decision(a,b,c);
if(!createdTable) {
	tableLink=createTable();
	console.log('i`m here');
	}
addDesition(tableLink,d,a,b,c);
});

function decision(a,b,c) {

	if(a===0 && b===0 && c===0) return "Х - любое число";
	if(a===0 && b===0) return "Нет корней";
	if(a===0 && c===0) return "Корень 0 кратности 2";
	if(a===0) return "Корень "+-c/b+" кратности 2";
	if(b==0 && c==0) return "Корень 0 кратности 2";
	if(b==0) return ["Корень первый "+Math.sqrt(c/a) , "Корень второй " + (-Math.sqrt(c/a))];
	let disc=discriminant(a,b,c);
	console.log(disc);
	if(disc<0) return "Нет действительных корней";
	if(disc===0) return "Корень "+(-b/(2*a)) +" кратности 2"
		return ["Корень первый "+((-b+Math.sqrt(disc))/(2*a)) , "Корень второй " + ((-b-Math.sqrt(disc))/(2*a))];
}

function discriminant(a,b,c){
	return b*b-4*a*c;
}

function createTable()
{
		let table = document.createElement('table');
		table.setAttribute('id','table')
		let thead = document.createElement('thead');
		let tbody = document.createElement('tbody');

		table.appendChild(thead);
		table.appendChild(tbody);
		table.setAttribute('class','aligncenter');

// Adding the entire table to the body tag
	document.getElementById('body').appendChild(table);

	let row_1 = document.createElement('tr');
	let heading_0 = document.createElement('th');
	heading_0.innerHTML = "";
	let heading_1 = document.createElement('th');
	heading_1.innerHTML = "a";
	let heading_2 = document.createElement('th');
	heading_2.innerHTML = "b";
	let heading_3 = document.createElement('th');
	heading_3.innerHTML = "c";
	let heading_4 = document.createElement('th');
	heading_4.width='300px';
	heading_4.colSpan=2;
	heading_4.innerHTML = "Корни";
	

	//row_1.appendChild(heading_0);
	row_1.appendChild(heading_1);
	row_1.appendChild(heading_2);
	row_1.appendChild(heading_3);
	row_1.appendChild(heading_4);

	thead.appendChild(row_1);
	createdTable=true;

		return tbody;

}
function addDesition(tbody,decision,a,b,c){

	let row_2 = document.createElement('tr');
	let row_2_data_1 = document.createElement('td');
	row_2_data_1.innerHTML = counter;

	let row_2_data_2 = document.createElement('td');
	row_2_data_2.innerHTML = a;

	let row_2_data_3 = document.createElement('td');
	row_2_data_3.innerHTML = b;

	let row_2_data_4 = document.createElement('td');
	row_2_data_4.innerHTML = c;	

	//row_2.appendChild(row_2_data_1);
	row_2.appendChild(row_2_data_2);
	row_2.appendChild(row_2_data_3);
	row_2.appendChild(row_2_data_4);

	let row_2_data_5 = document.createElement('td');
	if (!Array.isArray(decision)){
	row_2_data_5.innerHTML = decision;
	row_2_data_5.colSpan = 2;
	row_2.appendChild(row_2_data_5);
	}

	else
{
	let row_2_data_5 = document.createElement('td');
	row_2_data_5.innerHTML = decision[0];
	let row_2_data_6 = document.createElement('td');
	row_2_data_6.innerHTML = decision[1];
	row_2.appendChild(row_2_data_5);
	row_2.appendChild(row_2_data_6);
}
counter++;
row_2.addEventListener('click' , function (){
	var checkboxElement = this;
	ell = checkboxElement.closest("tr"); // tr element (ваша строчка)
	ell.parentElement.removeChild(ell); // удаляем всю строку
	counter--;
	console.log(counter);
	zebromod();
	if(counter===0) {

		var removeTab = document.getElementById('table');
		var parentEl = removeTab.parentElement;
		parentEl.removeChild(removeTab);
		counter=0;
		createdTable=false;
	}
})
tbody.appendChild(row_2);
zebromod();	
}

function zebromod()
{
	if(createdTable){
	var table = document.getElementById('table');
	var table_body = table.getElementsByTagName('tbody');
 
	for (var h = 0; h < table_body.length; h++) {
	var table_tr = table_body[h].getElementsByTagName('tr');
	for (var i = 0; i < table_tr.length; i++) {
		if (i%2) {
			table_tr[i].className = 'even';
		} else {
			table_tr[i].className = 'odd';
		}
	}
}
}
}


