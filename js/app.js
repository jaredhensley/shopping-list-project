
$(document).ready(function() {

      $('ul').on('click', 'i', function() {
        console.log(this);
        var i = $(this);

        if ((i).hasClass('fa fa-square-o fa-2x')) {
          $(i).removeClass('fa fa-square-o fa-2x');
          $(i).addClass('fa fa-check-square-o fa-2x');

        } else {
          $(i).removeClass('fa fa-check-square-o fa-2x');
          $(i).addClass('fa fa-square-o fa-2x');

        }
        $(i).closest("li").toggleClass('strikethrough');
      });


			$('i.fa.fa-trash-o.trashspace.fa-2x').on('click', function () {
				$(this).closest("li").remove();
			});

			$('button').on('click', function() {

				var input = $("input[name='item_name']").val();
				$('ul').append('<li>' + input + '</li>');

			});

	
});;





/*$(document).ready(function(){

	$('i.fa.fa-square-o.fa-2x').on('click', function () {
		$(this).toggle();
		$(this).prev("i").toggleClass("fa fa-check-square-o fa-2x");
		$(this).closest("li").toggleClass('strikethrough');
		//var listItem = $(this).closest("li");
	});

	$('ul').on('click','i.fa.fa-check-square-o.fa-2x', function() {
		
		$(this).toggle();
		$(this).next().toggle();
		$(this).closest("li").toggleClass('strikethrough');
	});

	$('i.fa.fa-trash-o.trashspace.fa-2x').on('click', function () {
		$(this).closest("li").remove();
	});

	
});;*/