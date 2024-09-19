// console.log('index js');

document.getElementById('btn-add-money').addEventListener('click', function(event){

	event.preventDefault();
	// console.log('add money clicked');

	const addMoneyInfo = document.getElementById('input-add-money').value;
	const pinNumberInput = document.getElementById('input-pin-number').value;
	// console.log(typeof addMoneyInfo, typeof pinNumberInput);

	if (pinNumberInput === '1234'){
		// console.log('add money your account');

		const addMoneyNumber = parseFloat(addMoneyInfo)

		const balance = document.getElementById('account-balance').innerText;

		const balanceNumber = parseFloat(balance);
		// console.log(typeof balanceNumber);
		// console.log(typeof balance);
		// console.log(typeof addMoneyNumber);

		const newBalance = addMoneyNumber + balanceNumber;
		console.log(newBalance);

		document.getElementById('account-balance').innerText = newBalance;
	}else{
		alert('failed your password, please try again later')
	}
})