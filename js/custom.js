(function($, Drupal, drupalSettings){

    Drupal.behaviors.config_form = {
        attach: function (context, settings) {
            //var setTimezone = drupalSettings.timezone_clock.timezone;
            var getOffset = drupalSettings.timezone_clock.offset;

            /* 
            * return the suffix after current date
            */
            function getSuffix(d) {
                if (d > 3 && d < 21) return 'th';
                switch (d % 10) {
                  case 1:  return "st";
                  case 2:  return "nd";
                  case 3:  return "rd";
                  default: return "th";
                }
            }
            
            var suffix = getSuffix(new Date().getDay());
         
            var options = {
                utc: true,
                utc_offset: getOffset,
                format: '%d'+suffix+' %b %Y - %I:%M %P', // 12-hour with am/pm 
                timeout: 500
              }
              $('.datetime').jclock(options);
        }
    }

})(jQuery, Drupal, drupalSettings);