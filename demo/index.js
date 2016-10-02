$(document).ready(function(){

	$('#fullname-input').validex({
		pattern: '^[a-zA-Zа-яА-Я\\s]+$',
		className: 'has-error',
		target: '#fullname-group',
		onValid: function(input, target) {
			$(target).removeClass('has-error');
		},
		onNotValid: function(input, target) {
			$(target).addClass('has-error');
		}
	});

	$('#email-input').validex({
		pattern: '\\S+@\\S+\\.\\S+',
		className: 'has-error',
		target: '#email-group',
		onValid: function(input, target) {
			$(target).removeClass('has-error').addClass('has-success');
		},
		onNotValid: function(input, target) {
			$(target).removeClass('has-success').addClass('has-error');
		}
	});

	$('#hex-input').validex({
		pattern: '\\b[0-9A-Fa-f]{3,6}\\b',
		className: 'has-error',
		target: '#hex-group',
		onValid: function(input, target) {
			console.log(input.val());
			$('.input-group-addon').css('background-color',input.val());
			$(target).removeClass('has-error');
		},
		onNotValid: function(input, target) {
			$(target).addClass('has-error');
		}
	});

	$('input[data-validex]').validex();

	/*$('input[data-validex]').on('keyup',function(){
	  var match = $(this).attr('data-required');
	  if (!$(this).val().match(match)) $(this).removeClass('complete').addClass('error'); else $(this).removeClass('error').addClass('complete');
	});*/

});