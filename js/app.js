
$(document).ready(function(){

	$('i.fa.fa-square-o.fa-2x').click(function () {
		$(this).toggle();
		$(this).prev("i").toggleClass("fa fa-check-square-o fa-2x");
		$(this).closest("li").toggleClass('strikethrough');
	});

	/*$("i.fa.fa-check-square-o.fa-2x").click(function () {
		$('i.fa.fa-square-o.fa-2x').toggle();
		$("i.fa.fa-check-square-o.fa-2x").toggle();
		$("li").toggleClass('strikethrough');
	});*/
});;