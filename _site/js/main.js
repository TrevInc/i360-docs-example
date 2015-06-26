$(document).ready(function(){

    var current = 'php';

    //  Hide all code elements except for PHP
    $('.language-javascript').parent().parent().hide();
    $('\\.language-\\#').parent().parent().hide();
    $('.language-ruby').parent().parent().hide();

    //  On click, show the container and hide the currently active one
    $('nav-tabs').find('a').on('click',function(){
        alert( $(this).class() );
    });
});