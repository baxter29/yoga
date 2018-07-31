var flag = 0;

$(document).ready(function(){
  var burger_menu = $(".burger").on("click",function menu(){
	  var menu_hidden = $(".menu").slideToggle(1000,function (){
		 if($(this).css('display') == 'none') {
		 $(this).removeAttr('style');
			
	 }  
	  }); 
	
  }) 
  flag = 1;
});
if(flag == 1)
	{
		var menu = $(document).removeClass(".menu");
	}


/////// MATCH MEDIA FOR NAV BAR


function myFunction(x) {
    if (x.matches) { // If media query matches
//	document.querySelector(".menu").style.backgroundColor = "green";
		document.querySelector(".menu").style.display = "none";
     
    } else {
//        document.body.style.backgroundColor = "pink";
			document.querySelector(".menu").style.display = "flex";
	
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/////


//slider

$(document).ready(function(){ 
var isname = $(".submit").on("click",function() {
	if(/^[a-zA-Z-.]+$/.test($(".isname").val())){
		return alert(" Hello ," + $(".isname").val() + " ! ");	
	}
	else {
		return alert("ошибка");
	}	
})
})

$(document).ready(function(){ 
var isphone = $(".submit").on("click",function() {
	if(/^[0-9]{3,7}$/.test($(".isphone").val())){
		return alert(" Your number," + $(".isphone").val() + " ! ");	
	}
	else {
		return alert("ошибка");
	}	
})
})



console.log(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test('coffeman@mail.ru'));
 console.log(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test('@coffeman@mail.ru'));

$(document).ready(function(){ 
var sect3_img = $(".sect3-img").hover(function func(){
	$(this).children('.block-hover').fadeIn()},
	  function(){
		$(this).children('.block-hover').fadeOut();
	}
	
)})


//SLIDER //

 $('.sl').slick(
  );



///// SCROLL //////


$(document).ready(function(){
$(".menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
event.preventDefault();

//забираем идентификатор бока с атрибута href
var id = $(this).attr('href'),

//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;

//анимируем переход на расстояние - top за 1500 мс
$('body,html').animate({scrollTop: top}, 1500);
});
});


