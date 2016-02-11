# jfMagnify
jQuery plugin that creates a magnify glass effect. 

## Set Up
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
3. This is the default setup in the HTML, but class names can be customized via arguments in the init function or a data attributes in the parent element.
    ```html
    <div class="magnify">
		<div class="magnify_glass"></div>
		<div class = "element_to_magnify">
			<img src="image/IMG_2209.jpg" draggable="false"/>
		</div>
	</div>
    ```

4. Init the plugin by attaching it to a direct parent  of the element you want to magnify.
    ```js
    $(".magnify").jfMagnify({});
    ```
    
## CSS
I wanted the structure to be as adaptable as possible, so the default class names can be changed as arguments in the init function or data attributes in the opening of the parent element. 
* Use classes instead of id attributes so you can have more than one magnified effect on a page.
* The parent element cannot be statically positioned. It needs to be positioned: relative, absolute, or fixed.
* The magnifyGlass (default class name '.magnify_glass') element needs to be positioned absolute.
* The magnified zone (default class name '.magnify_glass') is where the magnified element will appear. This element needs to be positioned absolute with the the overflow set to hidden.
```css
.magnify {
	position: relative;
	overflow: hidden;
}
.magnify_glass {
	z-index: 100;
	position: absolute;
	overflow: hidden;
}
```

## Defaults and Options
* __center:__ Centers the magnified area in the magnified zone. The alternate is top, left. The default is true.
* __scale:__ Scale can be changed. The default is 2x.
* __containment:__ Defines the magnify glass's containment area. The default is set to be its direct parent.
* __magnifyGlass:__ Defines the magnify glass element (the element you want draggable). The default is '.magnify_glass'.
* __magnifiedElement:__ Added class name to the cloned or magnified version of the element that has been magnified. This will allow you to select this element in css. The default is '.magnified_element'.
* __magnifiedZone:__ Area where you want the magnified element to live. The default is set to '.magnify_glass'.
* __elementToMagnify:__ Identifies the element you want to magnify. The default is '.element_to_magnify'.

### Options as Arguments
Options can be passed as arguments through the init function.
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
	
### Options as Data Attributes
Options can also be passed trough data attributes in the parent element
```html
<div class="magnify" 
	data-center = "true"
	data-scale ="2"
	data-containment =".magnify"
	data-magnify-glass = ".magnify_glass"
	data-magnified-element = ".magnified_element"
	data-magnified-zone =".magnify_glass"
	data-element-to-magnify = ".element_to_mag" >
```

## Public functions
There are few public functions that can be called.
* destroy(): This deactivates the plugin
* scaleMe(number): This can be called to increase or decrease the scale of the magnified element. 

```js
$(".magnify").data("jfMagnify").scaleMe(5);

$(".magnify").data("jfMagnify").destroy();
```

