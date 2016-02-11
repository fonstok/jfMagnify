# jfMagnify
jQuery plugin that creates a magnify glass effect. This plugin will magnify html content, not just images. It makes a clone of the elements then scales them to your specification placing them in any container element you want. 

## Script Set Up
Just follow these steps to enable the magnify effect:

1. Include jQuery and jQuery UI on your page.

    ```html
    <script src="http://code.jquery.com/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    ```

2. Include jfMagnify after jQuery UI and before its first use.

    ```html
    <script src="jquery.jfMagnify.js"></script>
    ```

3. Init the plugin by attaching it to a direct parent  of the element you want to magnify.
    ```js
    $(".magnify").jfMagnify({});
    ```

## HTML
This is the default setup in the HTML, but class names can be customized via arguments in the init function or a data attributes in the parent element. 
* __All of the elements should be parented into one element__ and that element should be the one attached to jfMagnify.
* The element being magnified and the magnify glass need to have the same grid context starting at (0,0), so it's easier if they have the same direct parent. 



```html
<div class="magnify">
	<div class="magnify_glass"></div>
	<div class = "element_to_magnify">
		<img src="image/IMG_2209.jpg" draggable="false"/>
	</div>
</div>
```
   
## CSS
I wanted the structure to be as adaptable as possible, so the default class names can be changed as arguments in the init function or data attributes in the opening of the parent element. 
* Use classes instead of id attributes so you can have more than one magnified effect on a page.
* The parent element cannot be statically positioned. It needs to be positioned: relative, absolute, or fixed.
* The magnifyGlass (default class name '.magnify_glass') element needs to be positioned absolute.
* The magnifiedZone (default class name '.magnify_glass') is where the magnified area will appear. This element needs to be positioned absolute with the the overflow set to hidden.
* The element being magnified and the magnify glass need to have the same grid context starting at (0,0) so the elementToMagnify should be positioned at top left.
* The element being magnified and the magnified version of that element share a class (default class name '.element_to_magnify'). 
	* If you need to select only the element being magnified you can give it an id attribute.
	* If you need to select the magnified version of the element, use its unique class (default class name '.magnified_element').   

```css
.magnify {
	position: relative;
	width: 900px;
	height: 675px;
}
.magnify_glass {
	z-index: 100;
	position: absolute;
	overflow: hidden;
}
.element_to_magnify {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
}
#elementBeingMagnified {

}
.magnified_element {
	
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
$(".magnify").data("jfMagnify").destroy();

$(".magnify").data("jfMagnify").scaleMe(5);
```
##Demo
<p data-height="683" data-theme-id="0" data-slug-hash="eJQGJJ" data-default-tab="result" data-user="fonstok" class='codepen'>See the Pen <a href='http://codepen.io/fonstok/pen/eJQGJJ/'>Magnify</a> by Jon Fahnestock (<a href='http://codepen.io/fonstok'>@fonstok</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

