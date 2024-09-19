// console.log('clicked');
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
	// console.log('clicked');

	document.getElementById('cash-out-form').classList.remove('hidden');

	document.getElementById('add-money-form').classList.add('hidden');
});

document.getElementById('btn-show-add-money').addEventListener('click', function(){
	// console.log('add money clicked');

	document.getElementById('add-money-form').classList.remove('hidden');
	
	document.getElementById('cash-out-form').classList.add('hidden');
})