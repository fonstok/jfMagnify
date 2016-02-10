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
3. Init the plugin by attaching it to a direct parent  of the element you want to magnify.
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
