jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	
	jQuery(".fancybox").fancybox();
	
	let carousel = jQuery('#slider_img');
	let carousel2 = jQuery('#slider_img2');
		
	carousel.owlCarousel({
		items: 2,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			767:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1099:{
				items: 2,
				dots: false,
				mouseDrag: true
			}
		}
	});

	carousel2.owlCarousel({
		items: 4,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			479:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			767:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1099:{
				items: 4,
				dots: false,
				mouseDrag: true
			}
		}
	});


/* 
let name = document.querySelector('.name');
let phone = document.querySelector('.phone');
let postcode = document.querySelector('.postcode');
let address = document.querySelector('.address');
let email = document.querySelector('.email');


let y = document.getElementById("myInput");	
let message = document.getElementById("result");
let filter1 = /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/gm;
form.onsubmit = function(event){
	let ok = filter1.exec(name.value);
		if(!ok) {
			event.preventDefault();
		message.style.color = "red";
		message.style.textAlign = "center";
		message.style.marginTop = "20px"
		y.style.border = "red solid 2px";		
		};

	};
	 */
	const form  = document.getElementsByTagName('form')[0];

	const email = document.getElementById('mail');
	const emailError = document.querySelector('#mail + span.error');
	
	email.addEventListener('input', function (event) {
	  // Каждый раз, когда пользователь что-то вводит,
	  // мы проверяем, являются ли поля формы валидными
	
	  if (email.validity.valid) {
		// Если на момент валидации какое-то сообщение об ошибке уже отображается,
		// если поле валидно, удаляем сообщение
		emailError.textContent = ''; // Сбросить содержимое сообщения
		emailError.className = 'error'; // Сбросить визуальное состояние сообщения
	  } else {
		// Если поле не валидно, показываем правильную ошибку
		showError();
	  }
	});
	
	form.addEventListener('submit', function (event) {
	  // Если поле email валдно, позволяем форме отправляться
	
	  if(!email.validity.valid) {
		// Если поле email не валидно, отображаем соответствующее сообщение об ошибке
		showError();
		// Затем предотвращаем стандартное событие отправки формы
		event.preventDefault();
	  }
	});
	
	function showError() {
	  if(email.validity.valueMissing) {
		// Если поле пустое,
		// отображаем следующее сообщение об ошибке
		emailError.textContent = 'You need to enter an e-mail address.';
	  } else if(email.validity.typeMismatch) {
		// Если поле содержит не email-адрес,
		// отображаем следующее сообщение об ошибке
		emailError.textContent = 'Entered value needs to be an e-mail address.';
	  } else if(email.validity.tooShort) {
		// Если содержимое слишком короткое,
		// отображаем следующее сообщение об ошибке
		emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
	  }
	
	  // Задаём соответствующую стилизацию
	  emailError.className = 'error active';
	}

	
});






'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});