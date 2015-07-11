$(function (){
	
	var $txs = $('#txs');
	
	function parseFees(tx) {
		$txs.append('<li>' + tx.fees + '</li>');
	}
	
	$.ajax({
		type: 'GET',
		url: 'https://api.chain.com/v2/bitcoin/addresses/1K4nPxBMy6sv7jssTvDLJWk1ADHBZEoUVb/transactions?api-key-id=DEMO-4a5e1e4&limit=2',
		success: function(txs) {
			$.each(txs, function(i, tx) {
				parseFees(tx);
			});
		},
		error: function() {
			alert('error getting transactions');	
		}
	});
	
})