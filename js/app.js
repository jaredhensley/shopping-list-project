
$(document).ready(function() {

      $('ul').on('click', 'i', function() {  // if you click an <i> element in the DOM
        var i = $(this);  // setting a variable referenced to the clicked element

        if ((i).hasClass('fa fa-square-o fa-2x')) { // if user clicks empty square
          $(i).removeClass('fa fa-square-o fa-2x');
          $(i).addClass('fa fa-check-square-o fa-2x');

        } else if ((i).hasClass('trashcan')) { //if user clicks trashcan, do the following
      		$(this).parents("li").remove();	

      	} else { // if user clicks checked square
          $(i).removeClass('fa fa-check-square-o fa-2x'); 
          $(i).addClass('fa fa-square-o fa-2x');
        }

        $(i).closest("li").toggleClass('strikethrough');
      	$("#list").sortable({ // jQuery UI plugin for sortable lists
					placeholder: "ui-sortable-placeholder" 
    		});  
      });


		/*	$('ul').on('click', 'i.trashcan', function () {
				$(this).parents("li").remove();
			});*/

			$('button').on('click', function(event) {
				event.preventDefault(); // prevents page reload after submission 
				var checkbox = '<i class="fa fa-square-o fa-2x"></i>';
				var trashcan = ' <i class="fa fa-trash-o trashspace fa-2x trashcan"></i>'; 
				var input = $("input[name='item_name']").val(); // creating a variable to input value
				$('ul').append('<li>' + input + '<span>' + checkbox + trashcan + '</li>'); // appends new list item
				$('#item').val(''); // resets input field
			});


});;







