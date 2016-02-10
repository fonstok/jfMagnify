# magnify
jQuery plugin for a magnify glass effect 

# Set Up
Just follow these steps to enable the magnify effect:

1. Include jQuery and jQuery UI on your page.

    ```html
    <script src="http://code.jquery.com/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    ```

2. Include jfMagnify after jQuery UI and before its first use.

    ```html
    <script src="jquery.jfMagnify.1.0.js"></script>
    ```
3. This is the default setup in the HTML, but class names can be custimized via arguments in the init function or a data attributes in the parent element.
    ```html
    <div class="magnify">
		<div class="magnify_glass"></div>
		<div class = "element_to_magnify">
			<img src="image/IMG_2209.jpg" draggable="false"/>
		</div>
	</div>;
    ```

4. Init the plugin by attaching it to a direct parent  of the element you want to magnify.
    ```html
    $(".magnify").jfMagnify();
    ```
    
# Defaults and Options

* center: Centers the magnified area in the magnifed zone. The alternate is top, left. The default is true.
* scale: Scale can be changed. The default is 2x.
* containment: Cefines the magnify glass's containment area. The default is set to be its direct parent.
* magnifyGlass : Defines the class of the magnify element. The default is '.magnify_glass'.
* magnifiedElement: Added class name to the cloned or magnified version of the element that has been magnified. The dafault name is '.magnified_element'.
* magnifiedZone: Area where you want the magnified element to live. The default are is set to '.magnify_glass'.
* elementToMagnify: Identifies the element you want to magnify. The default class name is '.element_to_magnify'.

## Options can be passed as arguments
```js
$(".magnify").jfMagnify({
	center: true,
	scale:2,
	containment:'magnify',
	magnifyGlass : '.magnify_glass',
	magnifiedElement: '.magnified_element',
	magnifiedZone:'.magnify_glass',
	elementToMagnify : '.element_to_magnify',
});
```
	
## Options can olso be passed trough data attributes in the parent element
```html
<div class="magnify" 
	data-enter = "true"
	data-scale ="2"
	data-containment =".magnify"
	data-magnify-glass = ".magnify_glass"
	data-magnified-element = ".magnified_element"
	data-magnified-zone =".magnify_glass"
	data-element-to-magnify = ".element_to_mag" >
```

