// console.log('cash out js');

document.getElementById('btn-cash-out').addEventListener('click', function(event){

	event.preventDefault();
	// console.log('cash out button clicked');

	const cashOutInput = document.getElementById('input-cash-out').value;
	// console.log(cashOutInput);
	const pinNumberInput = document.getElementById('input-cash-out-pin').value;
	// console.log(pinNumberInput);

	if (pinNumberInput === '1234'){
		// console.log('cash out your money');
		const balance = document.getElementById('account-balance').innerText;
		// console.log(typeof balance);
		const balanceNumber = parseFloat(balance);
		const cashOutNumber = parseFloat(cashOutInput);

		// console.log(balanceNumber, cashOutNumber);

		const newBalance = balanceNumber - cashOutNumber;

		// console.log(newBalance);
		document.getElementById('account-balance').innerText = newBalance;
	}else{
		alert('failed your password , please try again later');
	}
})