$(document).ready(function(){

    //  Hide all preprocessor PHP crap
    $('.language-php').find('.cp').hide();

    //  Hide all code elements except for PHP
    $('code[class="language-javascript"]').parent().parent().hide();
    $('code[class="language-c#"]').parent().parent().hide();
    $('code[class="language-ruby"]').parent().parent().hide();

    //  On click, show the container and hide the currently active one
    $('.nav-tabs li').on('click',function(){
        //  Get the name of the class to target
        var c = $(this).find('a').attr('class');
        var current = $('.active').find('a').attr('class');

        if( c==current )
            return;

        //  Change the selector
        $('.'+current).parent().removeClass('active');
        $('.'+c).parent().addClass('active');
    });
});