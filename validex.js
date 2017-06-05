/**
 * 
 * jQuery plugin for validation inputs by regular expression v1.0.1
 *
 * https://github.com/Archakov06/validex
 *
 * Copyright 2016 Tom Hiller
 * Released under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
;(function( $ ){

  $.fn.validex = function( options ) {

	var $this = $(this);
	var pattern = null;

	// Если паттерн уазан в аттрибуте
	if (typeof $this.attr('pattern') == 'string') pattern = $this.attr('pattern');

	var defaults = {
		pattern: null,
		target: null,
		className: 'error',
		onValid: function(elem){},
		onNotValid: function(elem){},
		onBefore: function(t){},
		onAfter: function(t){},
	};

	var options = $.extend(defaults, options);

	if ( ( options.pattern == null || 
		options.className == '' || 
		typeof options.onValid != "function" || 
		typeof options.onNotValid != "function" || 
		typeof options.onBefore != "function" || 
		typeof options.onAfter != "function" )
	) 
	{ console.error( 'One of the parameters is incorrect.' ); return false; }


	options.pattern = pattern ? pattern : options.pattern;
	options.target = !options.target ? $this : options.target;

	switch (options.pattern) {

		case 'email':
			options.pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
		break;

		case 'url':
			options.pattern = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
		break;

		case 'phone':
			options.pattern = /^\+?[2-9]\d{2}[0-9]\d{3}\d{4}$/;
		break;

		case 'tw-username':
			options.pattern = /^@([A-Za-z0-9_]{3,15})$/;
		break;

		case 'card':
			options.pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
		break;

		case 'hex':
			options.pattern = /\#([a-fA-F]|[0-9]){3, 6}/;
		break;

		default:
			options.pattern = new RegExp(pattern, flags);
		break;

	}

	if (pattern) {

		options.onValid = function( input ){
			$(input).removeClass(options.className);
		}

		options.onNotValid = function( input ){
			$(input).addClass(options.className);
		}

	}

	$this.on( 'keyup change', function(){

		options.onBefore( $this, options.target );

		if ( $this.val().match(options.pattern) ) {

			options.onValid( $this, $(options.target) );

		} else {

			options.onNotValid( $this, $(options.target) );

		}

		options.onAfter( $this, $(options.target) );

	});

  };

})( jQuery );
