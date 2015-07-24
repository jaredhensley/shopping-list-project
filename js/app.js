
$(document).ready(function(){

	$('i.fa.fa-square-o.fa-2x').click(function () {
		$(this).toggle();
		$(this).prev("i").toggleClass("fa fa-check-square-o fa-2x");
		$(this).closest("li").toggleClass('strikethrough');
		/*var listItem = $(this).closest("li");*/
	});

	$('i.fa.fa-check-square-o.fa-2x').click(function() {
		alert('test');
		$(this).toggle();
		/*$(this).next("i").toggleClass("fa fa-square-o fa-2x");*/

	});

	$('i.fa.fa-trash-o.trashspace.fa-2x').click(function () {
		$(this).closest("li").remove();
	});

	/*$('i.fa.fa-check-square-o.fa-2x').click(function () {
		$(this).toggle();
		$(this).next("i").toggleClass("fa fa-square-o fa-2x");
		$(this).closest("li").toggleClass('strikethrough');
	});*/

	/*$("i.fa.fa-check-square-o.fa-2x").click(function () {
		$('i.fa.fa-square-o.fa-2x').toggle();
		$("i.fa.fa-check-square-o.fa-2x").toggle();
		$("li").toggleClass('strikethrough');
	});*/
});;