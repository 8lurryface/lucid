$(function() {
    $('.plan').hover( function(){
       $('tr:first-child > td', this).addClass('hover-title');
       $('tr:nth-child(2) > td', this).addClass('hover-price');
       $('tr:last-child > td .button', this).addClass('hover-button');
    },
    function() {
        $('tr:first-child > td', this).removeClass('hover-title');
        $('tr:nth-child(2) > td', this).removeClass('hover-price');
        $('tr:last-child > td .button', this).removeClass('hover-button');
    });

	$('#menu-icon').click(function(){
		$(this).toggleClass('open');
	});
});   

    