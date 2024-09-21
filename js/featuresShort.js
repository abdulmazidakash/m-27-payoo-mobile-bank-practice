document.getElementById('btn-show-add-money')
	.addEventListener('click', function(){
	
		// console.log('features section button clicked');

		showSectionById('add-money-form');
	});

document.getElementById('btn-show-cash-out')
	.addEventListener('click', function(){
		showSectionById('cash-out-form');
	});

document.getElementById('btn-show-transaction-history')
	.addEventListener('click', function(){
		showSectionById('transaction-section')
	})