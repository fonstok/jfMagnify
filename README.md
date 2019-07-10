# jfMagnify
jQuery plugin that creates a magnify glass effect. This plugin will magnify html content, not just images. It does this by cloneing an identified element and its children, scaling them to your specification, and then appending them to an identified container element. 

## Demos
<p data-height="683" data-theme-id="0" data-slug-hash="eJQGJJ" data-default-tab="result" data-user="fonstok" class='codepen'>See the Pen <a href='http://codepen.io/fonstok/pen/eJQGJJ/'>Magnify</a> by Jon Fahnestock (<a href='http://codepen.io/fonstok'>@fonstok</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<p data-height="683" data-theme-id="0" data-slug-hash="eJQGJJ" data-default-tab="result" data-user="fonstok" class='codepen'>See the Pen <a href='http://codepen.io/fonstok/pen/reLmOJ'>Magnify Scale</a> by Jon Fahnestock (<a href='http://codepen.io/fonstok'>@fonstok</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<p data-height="683" data-theme-id="0" data-slug-hash="eJQGJJ" data-default-tab="result" data-user="fonstok" class='codepen'>See the Pen <a href='https://codepen.io/fonstok/pen/RQLwdW'>Magnify Mag Zone</a> by Jon Fahnestock (<a href='http://codepen.io/fonstok'>@fonstok</a>) on <a href='http://codepen.io'>CodePen</a>.</p>


## Script Set Up
Just follow these steps to enable the magnify effect:

1. Include jQuery and jQuery UI on your page. Last tested with jQuery 3.3.1 and jQuery UI 1.12.1 

    ```html
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    ```

2. Download and include jfMagnify after jQuery UI and before its first use.

    ```html
    <script src="jquery.jfMagnify.js"></script>
    ```

3. Init the plugin by attaching it to a direct parent  of the element you want to magnify.
    ```js
    $(".magnify").jfMagnify();
    ```
    
## Touch
Touch functionality has been tested with the addition of jQuery UI Touch Punch <a href="https://github.com/furf/jquery-ui-touch-punch/">https://github.com/furf/jquery-ui-touch-punch/</a>


## HTML
This is the default setup in the HTML, but class names can be customized via arguments in the init function or a data attributes in the parent element. 
* __All of the elements should be parented into one element__ and the parent element should be the one attached to jfMagnify.
* The element being magnified and the magnify glass need to have the same grid context starting at the same top and left (0,0), so it's easier if they have the same direct parent. 



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
* The __parent element__ cannot be statically positioned. It needs to be positioned: relative, absolute, or fixed.
* The __magnifyGlass__ (default class name '.magnify_glass') element needs to be positioned absolute.
* The __magnifiedZone__ (default class name '.magnify_glass') is where the magnified area will appear. This element needs to be positioned absolute with the the overflow set to hidden.
* The element being magnified and the magnify glass need to have the same grid context starting at (0,0) so the __elementToMagnify__ should be positioned at top, left.
* With this plugin it's a good practice to use __classes__ instead of id attributes because the magnified element and the element being magnified are cloned.
* The element being magnified and the magnified version of that element share a class (default class name '.element_to_magnify'). 
	* This is so it and its children appear identical to their counterparts.
	* If you need to select only the __element being magnified__ you can add an id attribute to its opening. The plugin will remove the ID from the magnified version.
	* If you need to select the __magnified version of the element__, it is given a unique class (default class name '.magnified_element') that can be selected.   

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
* __scaleGlass:__ This will scale the magnify glass in relation to the magnifiedZone's width and hight. This is helpful when creating an effect demonstrated in the magZone demo.
* __magnifiedElement:__ Added class name to the cloned or magnified version of the element that has been magnified. This will allow you to select this element in css. The default is '.magnified_element'.
* __magnifiedZone:__ Area where you want the magnified element to live. The default is set to '.magnify_glass'.
* __elementToMagnify:__ Identifies the element you want to magnify. The default is '.element_to_magnify'.

### Options as Arguments
Options can be passed as arguments through the init function.
```js
$(".magnify").jfMagnify({
	center: true,
	scale:2,
	scaleGlass:false,
	containment:'magnify',
	magnifyGlass : '.magnify_glass',
	magnifiedElement: '.magnified_element',
	magnifiedZone:'.magnify_glass',
	elementToMagnify : '.element_to_magnify',
});
```
	
### Options as Data Attributes
Options can also be passed through data attributes in the opening of the parent element. __Notice that the data attributes use dashes instead of camel case__.
```html
<div class="magnify" 
	data-center = "true"
	data-scale ="2"
	data-containment =".magnify"
	data-magnify-glass = ".magnify_glass"
	data-scale-glass = false;
	data-magnified-element = ".magnified_element"
	data-magnified-zone =".magnify_glass"
	data-element-to-magnify = ".element_to_magnify" >
```

## Public functions
There are few public functions that can be called.

__destroy()__: This deactivates the plugin
```js
$(".magnify").data("jfMagnify").destroy();
```
__scaleMe(number)__: This can be called to increase or decrease the scale of the magnified element.
```js
var scaleNum = 2;
$('.plus').click(function(){
	scaleNum += .5;
	if (scaleNum >=3) {
		scaleNum = 3;
	};
	$(".magnify").data("jfMagnify").scaleMe(scaleNum);
});
```
__update()__: This can be called to update the movement of the magnified element. This is handy if you need to update on non user movement like on animate. 
```js
$('.magnify_glass').animate({
	'top':'60%',
	'left':'60%'
	},{
	duration: 1200, 
	progress: function(){
		$(".magnify").data("jfMagnify").update();
	}, 
	ease: "easeInQuint"
});
```




## Credits
I used http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/ as a starting point for the plugin.


