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

		if (isNaN(addMoney)){
			alert('failed to add money.');
			return;
		}

		// console.log('add money value', addMoney, pinNumber);

		if (pinNumber === 1234){

			const balance = getTextFieldValueById('account-balance');
			// console.log('balance add', balance);
			const newBalance = balance  + addMoney;

			document.getElementById('account-balance').innerText = newBalance;

			//add to transaction history
			const p = document.createElement('p');
			p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance} `;
			console.log(p);

			//should be a common function 
			document.getElementById('transaction-container').appendChild(p);

		}else{
			alert('failed your password, please try again');
		}
	})