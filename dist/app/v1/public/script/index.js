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
        top: 650,
        left: 0,
        behavior: "smooth"
    });
});
$('.s').on('click', function(e){
    window.open('/');
});

$('.bit-container').on('click', function(e){
    window.open($(this).attr('data-url'));
});