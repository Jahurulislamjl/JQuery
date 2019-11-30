$(document).ready(function(){
    $('h1').hide();

    $('#hide').click(function(){
        $('p').hide();
        $(this).hide();
        $('#show').show();
    })


    $('#show').click(function(){
        $('p').show();
        $(this).hide();
        $('#hide').show();
    })

    $('#hiteItem').click(function(){
        $('ul li:nth-child(3)').hide();
    })
})