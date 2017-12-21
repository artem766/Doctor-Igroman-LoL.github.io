var checkDiv = document.getElementsByClassName('Content');


for (var i=0; i<checkDiv.length; i++) {
	checkDiv[i].onclick = f1;
	//console.log(checkDiv[i]);
}

function f1() {
	//console.log(this);
	//alert('Hello');
}