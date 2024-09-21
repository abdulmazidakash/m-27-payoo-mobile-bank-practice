// console.log('add money short js');

// document.getElementById('btn-add-money')
// 	.addEventListener('click', function(event){
// 		event.preventDefault();

// 		console.log('add money button clicked');

// 		// getInputFieldValueById();
// 		const addMoney = getInputFieldValueById();
// 		console.log('add money value', addMoney);
// 	})

document.getElementById('btn-add-money')
	.addEventListener('click', function(event){
		event.preventDefault();

		const addMoney = getInputFieldValueById('input-add-money');
		const pinNumber = getInputFieldValueById('input-pin-number');

		console.log('add money value', addMoney, pinNumber);

		if (pinNumber === 1234){

			const balance = getTextFieldValueById('account-balance');
			// console.log('balance add', balance);
			const newBalance = balance  + addMoney;

			document.getElementById('account-balance').innerText = newBalance;
			
		}else{
			alert('failed your password, please try again');
		}
	})