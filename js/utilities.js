
// console.log('utilities  folder add');
// function getInputFieldValueById(){
// 	// console.log('utilities folder clicked');

// 	const addMoney = document.getElementById('input-add-money').value ;
// 	return addMoney;
// }

function getInputFieldValueById(id){

	const inputValue = document.getElementById(id).value ;
	const inputNumber = parseFloat(inputValue);

	return inputNumber;
}

function getTextFieldValueById(id){
	const textValue = document.getElementById(id).innerText;
	const textNumber = parseFloat(textValue);
	
	return textNumber;
}

function showSectionById(id){
	//hidden all section
	document.getElementById('add-money-form').classList.add('hidden');
	document.getElementById('cash-out-form').classList.add('hidden');
	document.getElementById('transaction-section').classList.add('hidden');

	//show section 
	document.getElementById(id).classList.remove('hidden');
}