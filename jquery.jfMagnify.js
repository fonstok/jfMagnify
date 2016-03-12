// written by Jon Fahnestock
// use as you like
// fonstok.com

(function($) {
    'use strict';
    $.jfMagnify = function(element, options) {
        var plugin = this;
        var $element = $(element);
        var dataatts = $element.data();
        var ratioW;
        var ratioH;
        var maggedElCX = 0;
        var maggedZoneCY = 0;
        var magGlassCX = 0;
        var magGlassCY = 0;
        var $magGlass;
        var $magnifiedElement;
        var $magnifiedZone;
        var $aToMag;

        var defaults = {
            center: true,
            scale:2,
            containment:element,
            magnifyGlass : '.magnify_glass',
            magnifiedElement: '.magnified_element',
            magnifiedZone:'.magnify_glass',
            elementToMagnify : '.element_to_magnify'
        };

        plugin.settings = {};

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options, dataatts);
            $(window).bind("resize", setUpMagnify);
            $magGlass = $element.find(plugin.settings.magnifyGlass);
            $magnifiedZone =  $element.find(plugin.settings.magnifiedZone); 
            $aToMag = $element.find(plugin.settings.elementToMagnify);

            var cloned = $aToMag.clone(true);
            $magnifiedElement = $(cloned).removeAttr('id').addClass(plugin.settings.magnifiedElement.slice(1));                
            $magnifiedZone.append($magnifiedElement); 


            $magGlass.draggable({
                containment:plugin.settings.containment, 
                drag:function(){
                    plugin.update();
                    if($magGlass.is(':animated') ) {
                        $magGlass.stop();
                    }
                },
            });  
            
            $('img').attr('draggable', false);

            setUpMagnify();
        };
        //-------------------------- Set Up 
        function setUpMagnify() {
            $magnifiedElement.css( {
                'transform-origin': 'top left',
                '-ms-transform-origin': 'top left',
                '-webkit-transform-origin': 'top left',
                '-moz-transform-origin': 'top left',
                'transform': 'scale('+plugin.settings.scale+','+plugin.settings.scale+')', 
                '-ms-transform': 'scale('+plugin.settings.scale+','+plugin.settings.scale+')', 
                '-webkit-transform': 'scale('+plugin.settings.scale+','+plugin.settings.scale+')', 
                '-moz-transform': 'scale('+plugin.settings.scale+','+plugin.settings.scale+')', 
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
            plugin.update(); 
        }
        //-------------------------- update the movement
        plugin.update = function(){
            var scrollToX = flipNum(($magGlass.position().left + magGlassCX) / ratioW);
            var scrollToY = flipNum(($magGlass.position().top + magGlassCY) / ratioH);
            $magnifiedElement.css({'left':scrollToX + maggedElCX, 'top':scrollToY + maggedZoneCY});
        };

        //-------------------------- disable the plugin
        plugin.destroy = function(){
            $(window).unbind("resize", setUpMagnify);
            $magGlass.draggable( "destroy" );
            $magnifiedElement.remove();
            $element.removeData('jfMagnify', plugin);
            plugin = null;
        };
        //-------------------------- scale function
        plugin.scaleMe = function(arg_scale){
            plugin.settings.scale = arg_scale;
            setUpMagnify();
        };

        //-------------------------- math stuff
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
    };

    $.fn.jfMagnify = function(options) {
        return this.each(function() {
            if (undefined === $(this).data('jfMagnify')) {
                var plugin = new $.jfMagnify(this, options);
                $(this).data('jfMagnify', plugin);
            }
        });
    };
})(jQuery);
