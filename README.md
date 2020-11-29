# CommonsJs

The **commonsJs** is a little library of functions used at [**ExpandedVenture**](https://expandedventure.com/expandedventure) to develop different UI/UX features.

The **commonsJs** library is just starting on Nov-2020, and more functions will be added as needed.

The **commonsJs** library has been written following the [**W3C JavaScript Best Practices**](https://www.w3.org/community/webed/wiki/JavaScript_best_practices).


Other JavaScript libraries where **CommonsJs** is used are:
* [**TempaltesJs**](https://github.com/leandrosardi/templatesjs).

# Overview

Here are listed each one of the functions provided by **commonsJs** with examples.

## commonsJs.version

Returns the version of this commonsJs library.

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
			$('#result').text(commonsJs.version);
		});
	</script>
</html>
```

## commonsJs.escapeHTML

## commonsJs.unEscapeHTML

## commonsJs.spin



# Disclaimer

Use at your own risk. The use of the software and scripts downloaded on this site is done at your own discretion and risk and with agreement that you will be solely responsible for any damage to any computer system or loss of data that results from such activities.

# Maintainer
Leandro Daniel Sardi <leandro((dot))sardi((@))expandedventure.com>
