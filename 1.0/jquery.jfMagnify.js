// written by Jon Fahnestock
// use as you like
// fonstok.com
(function($) {

    $.jfMagnify = function(element, options) {
        var plugin = this;
        var $element = $(element),
             element = element;
        var dataatts = $element.data();
        var ratioW;
        var ratioH;
        var maggedElCX = 0;
        var maggedZoneCY = 0;
        var magGlassCX = 0;
        var magGlassCY = 0;
        var $magGlass;
        var $magnifiedElement;
        var $magZone;
        var $aToMag;

        var defaults = {
            center: true,
            scale:2,
            containment:element,
            magnifyGlass : '.magnify_glass',
            magnifiedElement: '.magnified_element',
            magnifiedZone:'.magnify_glass',
            elementToMagnify : '.element_to_magnify',
        }

        plugin.settings = {};


        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options, dataatts);
            $(window).bind("resize", setUpMagnify);
            console.log(plugin.settings.magnifiedZone);
            //$element.prepend('<div class="'+plugin.settings.magnifyGlass.slice(1)+'"></div>')
            $magGlass = $element.find(plugin.settings.magnifyGlass);
            $magnifiedZone =  $element.find(plugin.settings.magnifiedZone); 
            $aToMag = $element.find(plugin.settings.elementToMagnify);

            var cloned = $aToMag.clone(true);
            $magnifiedElement = $(cloned).removeAttr('id');
            $magnifiedElement.addClass(plugin.settings.magnifiedElement.slice(1));                
            $magnifiedZone.append(cloned); 

            $magGlass.draggable({
                containment:plugin.settings.containment, 
                drag:move,
            });  
            
            setUpMagnify();
        }

        function setUpMagnify() {
            $magnifiedElement.css( {
                'transform-origin': 'top left',
                'transform': 'scale('+plugin.settings.scale+','+plugin.settings.scale+')', 
                'top':'0',
                'width':$aToMag.get(0).getBoundingClientRect().width,
                'height':$aToMag.get(0).getBoundingClientRect().height,
            });
            var aToMagW = $aToMag.get(0).getBoundingClientRect().width;
            var bigW = $magnifiedElement.get(0).getBoundingClientRect().width;
            var aToMagH = $aToMag.get(0).getBoundingClientRect().height;
            var bigH = $magnifiedElement.get(0).getBoundingClientRect().height;


            ratioW = getRatio(aToMagW, bigW);
            ratioH = getRatio(aToMagH, bigH);

            if (plugin.settings.center){
                maggedElCX = $magnifiedElement.parent().outerWidth()/2;
                maggedZoneCY = $magnifiedElement.parent().outerHeight()/2;
                magGlassCX = $magGlass.outerWidth()/2;
                magGlassCY = $magGlass.outerWidth()/2;
            }  
            move(); 
        }
        function move(){
            var scrollToX = flipNum(($magGlass.position().left + magGlassCX) / ratioW);
            var scrollToY = flipNum(($magGlass.position().top + magGlassCY) / ratioH);
            $magnifiedElement.css({'left':scrollToX + maggedElCX, 'top':scrollToY + maggedZoneCY});
        }

        // delete the object
        plugin.destroy = function(){
            $(window).unbind("resize", setUpMagnify);
            $magGlass.draggable( "destroy" );
            $element.removeData('jfMagnify', plugin);
            plugin = null;
        } 
        plugin.scaleMe = function(arg_scale){
            plugin.settings.scale = arg_scale;
            setUpMagnify();
        }

        // math stuff
        function getRatio(_num1, _num2)
        {
            var theNum;
            if (_num1 > _num2) {
                theNum = _num2 / _num1;
            } else {
                theNum = _num1 / _num2;
            }
            return theNum;
        }
        function flipNum(_num)
        {
            var theNum = _num * -1;
            return theNum;
        } 
        plugin.init();
    }

    $.fn.jfMagnify = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('jfMagnify')) {
                var plugin = new $.jfMagnify(this, options);
                $(this).data('jfMagnify', plugin);
            }
        });
    }
})(jQuery);
