$('.answer').css('display', 'none');
$('.down-ans').on('click', function( event ){
    const ans = $(this).parent().parent().parent().find('.answer').first();
    if( ans.css('display') === 'none'){ ans.css('display', 'block'); return;}
    ans.css('display', 'none'); return;
});
$('.s').on('click', function( event ){
    window.open('/');
});
$('#explore').on('click', function(e){
    const a = document.getElementById('gen')
    window.scroll({
        top: 510,
        left: 0,
        behavior: "smooth"
    });
})