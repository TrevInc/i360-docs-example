$(document).ready(function(){

    //  Hide all preprocessor PHP crap
    $('.language-php').find('.cp').hide();

    var current = 'php';

    //  Hide all code elements except for PHP
    $('.language-javascript').parent().parent().hide();
    $('code[class="language-c#"]').parent().parent().hide();
    $('.language-ruby').parent().parent().hide();

    //  On click, show the container and hide the currently active one
    $('.nav-tabs li').on('click',function(){
        alert( $(this).find('a').attr('class') );
    });
});