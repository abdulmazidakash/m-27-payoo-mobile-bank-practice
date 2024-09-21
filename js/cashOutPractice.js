// console.log('cash out practice clicked');

document.getElementById('btn-cash-out')
	.addEventListener('click', function(event){
		// console.log('click cash out button');
		event.preventDefault();

		const cashOutInput = document.getElementById('input-cash-out').value ;
		const cashOutInputNumber = parseFloat(cashOutInput);
		// console.log('cash out input value show', cashOutInput);
		const cashOutPin = document.getElementById('input-cash-out-pin').value ;
		// console.log('cash out pin clicked', cashOutPin);

		if (cashOutPin === '1234'){
			// console.log('cash out your money');

			const balance = document.getElementById('account-balance').innerText;
			const balanceNumber = parseFloat(balance);
			console.log('show your balance', balance);
			const newBalance = balanceNumber - cashOutInputNumber;

			document.getElementById('account-balance').innerText = newBalance;
		}else{
			alert('failed your password, please try again');
		}
	})