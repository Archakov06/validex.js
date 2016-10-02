;(function( $ ){ 

  $.fn.validex = function( options ) {

  	var $this = $(this);
  	var pattern = null;

  	if (typeof $this.attr('data-validex') == 'string') pattern = $this.attr('data-validex');

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
  		options.target == null || 
  		options.className == '' || 
  		typeof options.onValid != "function" || 
  		typeof options.onNotValid != "function" || 
  		typeof options.onBefore != "function" || 
  		typeof options.onAfter != "function" ) && !pattern
  	) 
    { console.error( 'One of the parameters is incorrect.' ); return false; }


	if (pattern) {

		options.target = null;
		options.pattern = pattern ? pattern : options.pattern;

		options.onValid = function( input ){
			$(input).removeClass(options.className);
		}

		options.onNotValid = function( input ){
			$(input).addClass(options.className);
		}

	}

   	$this.on( 'keyup', function(){
    	
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