(function($) {

	var methods = {
			
		init: function(options) {
			
			options = $.extend({
				decimals: 2
		    }, options);
		
			return this.each(function() {
				
				var $inclusive = $(this).find(options.inclusive), 
					$exclusive = $(this).find(options.exclusive);
				
				$inclusive.keyup(function() {
					var multiplier = options.rate / 100, 
						exclusive = ($(this).val() / (1 + multiplier));
					$exclusive.val(exclusive.toFixed(options.decimals));
				});
				
				$exclusive.keyup(function() {
					var multiplier = options.rate / 100, 
						inclusive = ($(this).val() * (1 + multiplier));
					$inclusive.val(inclusive.toFixed(options.decimals));
				});

			});
     	}
	
	};

	$.fn.tax = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.tax');
		}
	};
  
})(jQuery);