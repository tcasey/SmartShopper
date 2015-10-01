$(document).ready(function() {
    /*$('.form-submit').on('click', function(event) {
        var input = ()*/

    $('.emptyCart-button').click(function() {
        console.log( $( this ).text() );
        //$('.items').empty(); //empty's all children
        $('li').remove();
    });

    $('.submit-button').click(function() {
           console.log( $( this ).text() );
        var input = $('.enter-item').val();//current value that user inputed in text box
        $('.listed-items').prepend('<li>' + input + '<span class="icons"><a href="#" class="unchecked-box"><i class="fa fa-square-o"></i></a><a href="#" class="delete-circle"><i class="fa fa-minus-circle"></i></a></span></li>');
        $('.enter-item').val('');//setting input to blank
    });

    $('.listed-items, .inCart').on('click', '.delete-circle', function() { 
        console.log( $( this ).text() );
        $(this).closest('li').remove(); //find 'this' object. find closest list element
    });

    $('.listed-items').on('click', '.unchecked-box', function(event) {
        console.log( event.target );
        var $el = $(event.target).parents('li');
        var $elc = $el.clone(true)
        $el.remove();
        $elc.find('a.unchecked-box').addClass('checked-box').removeClass('unchecked-box')
           .children('i').addClass('fa-check-square-o').removeClass('fa-square-o');
        $('.inCart').prepend($elc)
//        $('.inCart li').eq(0).find('i.fa').addClass('fa-check-square-o').removeClass('fa-square-o') 
        console.log( $el );
        console.log( $elc );
    });    
})