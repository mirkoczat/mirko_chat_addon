'use strict';
jQuery('.mainnav').append('<li><a href="https://mirkoczat.pl/">MirkoCzat</a></li>')
jQuery('#site .grid-right').prepend('<div class="r-block"><h4>MirkoCzat</h4><div id="mirkoczat" class="fix-tagline"></div><div id="mirkoczat_embedded" class="fix-tagline"></div></div>')
var mirkoczat = {
  clear: function() {
    jQuery('#mirkoczat').html("");
  }
  ,update: function() {
    jQuery.getJSON('https://mirkoczat.pl/rooms.json', function(data) {
      mirkoczat.clear();
      data.rooms.map(function(room) {
        mirkoczat.add(room.name, room.count)
      });
    })
  }
  ,add: function(tag, count) {
    var a = jQuery('<a class="tag create"></a>').attr('href', 'https://mirkoczat.pl/t/' + tag).text('#' + tag + ' (' + count + ')');
    jQuery('#mirkoczat').append(a);
  }
}
jQuery('#newEntriesCounter').on('click', mirkoczat.update);
/* Displaying chat */
var tag = $('#input-tag').val();
if (!tag) { tag = "wykop" }
var iframe = jQuery('<iframe height="600" width="100%"></iframe>').attr('src', 'https://mirkoczat.pl/embed_t/' + tag);
$('#mirkoczat_embedded').html(iframe);
mirkoczat.update()
