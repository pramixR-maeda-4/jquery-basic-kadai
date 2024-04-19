const greeting = {
  japan:'こんにちは！',
  english:'hello',
};
const ids = {
  key:'#',
  target:'target',
  color:'change-color',
  text:'change-text',
  fade_out:'fade-out',
  fade_in:'fade-in',
};
$(function() {
  $(ids.key+ids.color).on('click', function(){
    $(ids.key+ids.target).css('color', 'red');
  });
  $(ids.key+ids.text).on('click', function(){
    $(ids.key+ids.target).text(greeting.english);
  });
  $(ids.key+ids.fade_out).on('click', function(){
    $(ids.key+ids.target).fadeOut();
  });
  $(ids.key+ids.fade_in).on('click', function(){
    $(ids.key+ids.target).fadeIn();
  });
});