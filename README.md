# CommonsJs

The **CommonsJs** is a little library of functions used at [**ExpandedVenture**](https://expandedventure.com/expandedventure) to develop different UI/UX features.

The **CommonsJs** library is just starting on Nov-2020, and more functions will be added as needed.

The **CommonsJs** library has been written following the [**W3C JavaScript Best Practices**](https://www.w3.org/community/webed/wiki/JavaScript_best_practices).


Other JavaScript libraries where **CommonsJs** is used are:
* [**TemplatesJs**](https://github.com/leandrosardi/templatesjs).

# Overview of Version 1.0.1

Here are listed each one of the functions provided by **CommonsJs** with examples.

## commonsJs.version
Returns the version of this **CommonsJs** library.

You can find a live example at [https://expandedventure.com/commonsjs/getting_version.html](https://expandedventure.com/commonsjs/getting_version.html).

Here is the source code of such example:

```html
<html>
	<head>
		<title>
			Commons.js - Example: Getting Version
		</title>
		<script src="./commons.js" type="text/javascript"></script>
		<script src="./jquery-3.5.1.min.js" type="text/javascript"></script>
	</head>
	<body>
		<button id='getVersion'>Get Version</button><br/>
		<br/>
		<textarea id='result' cols=100 rows=15> </textarea>
	</body>
	<script>
		$('#getVersion').click(function() {
			$('#result').text(CommonsJs.version);
		});
	</script>
</html>
```

## commonsJs.spin
Converts spintax to a random rotation/sample.
It doesn't support nested spintax.

Example:

The spintax
```
"Our {brand new|exclusive|unique|new}  {service|product} {was|is} {crafted|created|designed} to <!benefit1!write the most attractive benefit of your service!>"
```

may be converted to

```
"Our brand new product is created to <!benefit1!write the most attractive benefit of your service!>"
```

You can find a live example at [https://expandedventure.com/commonsjs/rotating_spintax.html](https://expandedventure.com/commonsjs/rotating_spintax.html).

Here is the source code of such example:

```html
<html>
	<head>
		<title>
			Commons.js - Example: Getting Version
		</title>
		<script src="./commons.js" type="text/javascript"></script>
		<script src="./jquery-3.5.1.min.js" type="text/javascript"></script>
	</head>
	
	<body>
		<textarea id='spintax' cols=100 rows=15> </textarea>
		
		<br/>
		<input id='spin' type='button' value='spin again!' />

		<br/>
		<span id='result' width='100%'> </span>
	</body>
	
	<script>
		$('#spin').click(function() {
			$('#result').text(
				commonsJs.spin(
					$('#spintax').val().toString()
				)
			)
		});

		$('#spintax').keyup(function() {
			$('#spin').trigger('click');
		});

		$(document).ready(function() {
			$('#spintax').val('{Hello|Hi there|Hi|Hello there}! !fname. {Thanks|Thank You|Thank you} Contact me at leandro<dot>sardi<at>expandedventure<dot>com!');
			$('#spin').trigger('click');
		});
	</script>
</html>
```

# Disclaimer

Use at your own risk. The use of the software and scripts downloaded on this site is done at your own discretion and risk and with agreement that you will be solely responsible for any damage to any computer system or loss of data that results from such activities.

# Maintainer
Leandro Daniel Sardi <leandro((dot))sardi((@))expandedventure.com>
