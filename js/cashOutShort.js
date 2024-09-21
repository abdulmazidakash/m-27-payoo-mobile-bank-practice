document.getElementById('btn-cash-out')
	.addEventListener('click', function(event){
		event.preventDefault();

		// console.log('cash out button clicked');

		const cashOutInput = getInputFieldValueById('input-cash-out');
		const cashOutPin = getInputFieldValueById('input-cash-out-pin');
		console.log('cash out form clicked', cashOutInput, cashOutPin);
	})