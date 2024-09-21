// console.log('add money practice js');

document.getElementById('btn-add-money')
	.addEventListener('click', function(event){
		event.preventDefault();

		// console.log('click add money button');

		const addMoney = document.getElementById('input-add-money').value ;
		const addNumber = parseFloat(addMoney);
		console.log('input field value show',typeof addNumber);
		const pinNumber = document.getElementById('input-pin-number').value ;
		// console.log('input pin number value show', pinNumber);

		if (pinNumber === '1234'){
			// console.log('your money add');

			const balance = document.getElementById('account-balance').innerText;
			const balanceNumber = parseFloat(balance)
			console.log(typeof balanceNumber);

			const newBalance = balanceNumber + addNumber;
			document.getElementById('account-balance').innerText = newBalance;
		}else{
			alert('pin number is not correct');
		}
	})