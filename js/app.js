
$(document).ready(function(){

$('i.fa.fa-square-o.fa-2x').click(function () {
	$('i.fa.fa-square-o.fa-2x').toggle();
		$("i.fa.fa-check-square-o.fa-2x").toggle();
		$("li").toggleClass('strikethrough');
	});

$("i.fa.fa-check-square-o.fa-2x").click(function () {
	$('i.fa.fa-square-o.fa-2x').toggle();
	$("i.fa.fa-check-square-o.fa-2x").toggle();
	$("li").toggleClass('strikethrough');
	});

});