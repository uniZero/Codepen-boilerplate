$('dl.toggle dt').click(function(e){
    $(this).nextUntil('dt').slideToggle();
});