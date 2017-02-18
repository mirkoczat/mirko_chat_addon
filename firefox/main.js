'use strict';
var mirkoczat = {
  init: function() {
    mirkoczat.showTopLink();
    jQuery.getJSON('//mirkoczat.pl/addon/t/' + mirkoczat.tagName() + '/state.json', mirkoczat.showButton);
  },
  tagName: function() {
    var t = jQuery('#input-tag').val();
    if (t === undefined) {
      t = 'wykop'; // główny czat
    }
    // /link/:id/*
    var d = jQuery('ul#favoritesLists').data('id');
    if (d !== undefined) {
      t = d;
    }
    return t;
  },
  showTopLink: function() {
    jQuery('.mainnav').append('<li><a href="https://mirkoczat.pl/t/indywidualny">MirkoCzat</a></li>');
  },
  showButton: function(data) {
    var html = '\
    <div class="r-block" id="mirkoczat_button_container">\
      <button id="mirkoczat_button">Pokaż MirkoCzat (' + data.user_count + ' obecnych)</button>\
    </div>\
    ';
    if (data.events.length > 0) {
      html += '\
      <div class="r-block" id="mirkoczat_event_container">\
        <h4>Wydarzenia na MirkoCzacie:</h4>\
          <ul>\
      ';
      data.events.forEach(function(arr) {
        var tag = arr[0];
        var when = arr[1];
        html += '\
              <li><a class="tag create" href="https://mirkoczat.pl/t/' + tag + '"><em>#</em>' + tag + ' - ' + when + '</a></li>\
        ';
      });
      html += '\
          </ul>\
      </div>\
      ';
    }
    jQuery('div.grid-right').prepend(html);
    jQuery('#mirkoczat_button').on('click', mirkoczat.showChat);
  },
  showChat: function() {
    var pos = jQuery('#mirkoczat_button_container').position();
    jQuery('body').append('\
    <div id="mirkoczat_container" class="r-block" style="position: fixed; z-index: 10; top: ' + pos.top + 'px; left: ' + pos.left + 'px; width: 324px; height: 620px; border: 5px solid #1c1c1c; border-radius: 0px">\
      <div id="mirkoczat_embedded" class="fix-tagline"></div>\
    </div>');
    var iframe = jQuery('<iframe height="600" width="100%"></iframe>').attr('src', 'https://mirkoczat.pl/embed_t/' + mirkoczat.tagName());
    jQuery('#mirkoczat_embedded').html(iframe);
  }
};
mirkoczat.init();
