
$(document).ready(function() {

      $('ul').on('click', 'i', function() {
        console.log(this);
        var i = $(this);

        if ((i).hasClass('fa fa-square-o fa-2x')) {
          $(i).removeClass('fa fa-square-o fa-2x');
          $(i).addClass('fa fa-check-square-o fa-2x');

        } else if ((i).hasClass('trashcan')) {
      		$(this).parents("li").remove();	

      	} else {
          $(i).removeClass('fa fa-check-square-o fa-2x');
          $(i).addClass('fa fa-square-o fa-2x');
        }

        $(i).closest("li").toggleClass('strikethrough');
      	
      });


		/*	$('ul').on('click', 'i.trashcan', function () {
				$(this).parents("li").remove();
			});*/

			$('button').on('click', function(event) {
				event.preventDefault();
				var checkbox = '<i class="fa fa-square-o fa-2x"></i>';
				var trashcan = ' <i class="fa fa-trash-o trashspace fa-2x trashcan"></i>';
				var input = $("input[name='item_name']").val();
				$('ul').append('<li>' + input + '<span>' + checkbox + trashcan + '</li>');

			});

});;







