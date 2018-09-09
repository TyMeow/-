// Кнопка Наверх
$(function(){
var up = $(".go-top-trigger"),
    b = up.css("bottom"),
    h = up.height(),
    d = $("#footer").offset();
$(document)
    .scroll(function () {
        var c = $(window)
            .height(),
            a = $(this)
                .scrollTop();
        200 < a ? up.fadeIn() : up.fadeOut();
        d.top > a + c - h ? up.css({
            bottom: b
        }) : up.css({
            bottom: a + c - d.top
        })
    });
up.click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});
});

// Плавный скроллинг по ссылкам
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

// Меню
$(function() {
  var link = $('.m-menu-link');
  var close = $('.close-menu');
  var closetwo = $('.close');
  var menu = $('.m-menu');
  link.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
  close.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  })
  closetwo.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  })
});

// Валидация формы
function provGuest() {
obj_form=document.forms.Guest;
obj_pole_name =obj_form.name;
obj_pole_email =obj_form.email;
obj_pole_message =obj_form.message;

if (obj_pole_name.value==""){
alert ("Write your name!"); 
return;
}
txt = obj_pole_email.value;
if (txt==""){
alert ("Write your E-mail!");
return;
}
if (txt.indexOf("@") == -1) { //проверяем существование символа @
alert("Enter the correct E-mail type name@mail.ru"); 
return; 
} 
if (txt.indexOf(".") == -1) { //проверяем существование символа .
alert("Enter the correct E-mail type name@mail.ru"); 
return; 
} 
//Все обязательные данные введены, поэтому отправляем форму
obj_form.submit();
}

function clear() {
    document.getElementsByName('#form1')[0].reset();
}