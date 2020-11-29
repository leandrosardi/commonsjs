var commonsJs = {
	/*
	 * Returns the version of this commonsJs library.
	 *  
	 */
	version: function() {
		return '1.0.1';
	},

	/*
	 * Converts spintax to plain text.
	 * It doesn't support nested spintax.
	 * 
	 * Example:
	 * "Our {brand new|exclusive|unique|new}  {service|product} {was|is} {crafted|created|designed} to <!benefit1!write the most attractive benefit of your service!>"
	 * may be converted to
	 * "Our brand new product is created to <!benefit1!write the most attractive benefit of your service!>"
	 * 
	 */
	spin: function(spintax) {
		var SPINTAX_PATTERN = /\{[^"\r\n\}]*\}/;
		var match = '';
		while (match = spintax.match(SPINTAX_PATTERN)) {
			match = match[0];
			var candidates = match.substring(1, match.length - 1).split("|");
			spintax = spintax.replace(match, candidates[Math.floor(Math.random() * candidates.length)]);
		}
		return spintax;
	},
}; // var commonsJs = {
