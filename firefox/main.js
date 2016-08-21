'use strict';
jQuery('.mainnav').append('<li><a href="https://mirkoczat.pl/t/indywidualny">MirkoCzat</a></li>')
jQuery('body').append('\
<div class="r-block" style="position: fixed; z-index: 10; top: 55px; right: 5px; width: 324px; height: 620px; border: 5px solid #1c1c1c; border-radius: 0px">\
  <div id="mirkoczat_embedded" class="fix-tagline"></div>\
</div>');
/* Displaying chat */
var tag = jQuery('#input-tag').val();
var iframe = jQuery('<iframe height="600" width="100%"></iframe>').attr('src', 'https://mirkoczat.pl/embed_t/' + tag);
jQuery('#mirkoczat_embedded').html(iframe);
