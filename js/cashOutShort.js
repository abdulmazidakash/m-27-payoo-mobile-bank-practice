document.getElementById('btn-cash-out')
	.addEventListener('click', function(event){
		event.preventDefault();

		// console.log('cash out button clicked');

		const cashOutInput = getInputFieldValueById('input-cash-out');
		const cashOutPin = getInputFieldValueById('input-cash-out-pin');
		console.log('cash out form clicked', cashOutInput, cashOutPin);

		if (isNaN(cashOutInput)){
			alert('failed to cash out');
			return;
		}

		if (cashOutPin === 1234){

				const balance = getTextFieldValueById('account-balance');
				const newBalance = balance - cashOutInput;

				document.getElementById('account-balance').innerText = newBalance;

				if (cashOutInput > balance){
					alert('you do not have enough money to cash out');
					return;
				}


				//add to transaction history 
				const div = document.createElement('div');
				div.classList.add('bg-yellow-300');
				div.innerHTML = `
					<h4 class='text-2xl font-bold'>Cash Out</h4>
					<p>${cashOutInput} withdraw. New Balance ${newBalance}</p>
				
				`
				document.getElementById('transaction-container').appendChild(div);
		}else{
			alert('failed your password, please try again');
		}
	})