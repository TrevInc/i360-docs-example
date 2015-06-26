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
        var select  = $(this).find('a').attr('class');
        var current = $('.active').find('a').attr('class');

        if( select==current )
            return;

        //  Change the selector
        $('.'+current).parent().removeClass('active');
        $('.'+select).parent().addClass('active');

        //  Translate languages into their code equivalents
        current = linkClassToCodeClass(current);
        select  = linkClassToCodeClass(select);

        //  Change the visible code
        $('code[class="'+current+'"]').parent().parent().stop().hide(250,function(){
            $('code[class="'+select+'"]').parent().parent().stop().show(250);
        });
    });

    function linkClassToCodeClass(name) {
        var n = name;
        switch( name ) {
            default:
                break;
            case 'php':
                n = 'language-php';
                break;
            case 'js':
                n = 'language-javascript';
                break;
            case 'cs':
                n = 'language-c#';
                break;
            case 'ror':
                n = 'language-ruby';
                break;
        }

        return n;
    }
});