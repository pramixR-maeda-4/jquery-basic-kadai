const txt_box='text-box';
const btn = 'btn';
const btn_clicked = 'クリックしました';

$(function(){
  $('.'+btn).on('click',()=>{
    $('.'+txt_box).prop('value', btn_clicked);
  });
});
