$(document).ready(function(){
    $('h1').hide();

    $('#hide').click(function(){
        $('p').hide('slow');
        $(this).hide('slow');
        $('#show').show();
    })


    $('#show').click(function(){
        $('p').show('slow');
        $(this).hide('slow');
        $('#hide').show('slow');
    })

    $('#hiteItem').click(function(){
        $('ul li:nth-child(3)').hide();
    })


    $('h3').on({
        mouseenter:function(){
            $('h3').css("background", "red")
        },

        mouseleave:function(){
            $('h3').css("background", "green")
        },

        dblclick:function(){
            $('h3').css("background", "yellow")
        }
    });
})