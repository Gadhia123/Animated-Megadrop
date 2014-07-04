jQuery(function( $ ) {
    $.fn.Navigation = function(options) {
        
        var settings = $.extend({
        activeClass: 'open',
        fadeInDuration: 250,
        fadeOutDuration: 'slow',
        openAnimation: 'fadeInUp',
        closeAnimation: 'fadeOutDown',
        hoverTimeout: 450
        
        }, options );
        
        
        
        function openmenu()
        {
         $menu = $(this);
          $menu.addClass(settings.activeClass)
               .find('div[class^="container-"]')
               .stop(true, true)
               .fadeIn(settings.fadeInDuration)
               .addClass('animated')
               .removeClass(settings.closeAnimation)
               .addClass(settings.openAnimation, function(){
                   this.addClass('navvisfix')
               });
       }
      
      function closemenu()
      {
          $menu = $(this);
          $menu.removeClass(settings.activeClass)
                .find('div[class^="container-"]')
                .stop(true, true).fadeOut(settings.fadeOutDuration)
                .removeClass(settings.openAnimation)
                .addClass(settings.closeAnimation).removeClass('navvisfix');;
      }
        
        $nav = this;
        
           
        //Fallback, remove css hover classes.
        $nav.removeClass('nojs').addClass('dsmenu');
        //Animate the menu using jQuery
        
 
      
   
        $('.dsmenu li').hoverIntent({
            over : openmenu,
	    out : closemenu,
            timeout : settings.hoverTimeout
        });  
        
        
        
        return this;
    };
}(jQuery));
