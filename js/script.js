$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__link').toggleClass('active');
	});
});

$("#upfile1").click(function () {
    $("#file1").trigger('click');
});