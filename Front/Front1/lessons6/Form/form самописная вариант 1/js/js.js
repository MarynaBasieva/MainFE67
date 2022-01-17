// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

 jQuery('#form1').validate({
         rules: {
                      name: {
						  required:true
						},
                      tel: {
                          required: true
                      }
                  },
                  messages: {
                      name: {
					     required: "Введите Ваше имя"
					  },
                      tel: {
					     required: "Введите Ваш номер телефона"
					 }
                  },
         submitHandler: function(form){			
  
  var name = jQuery('#form1').find('input[name="name"]').val();
  var tel = jQuery('#form1').find('input[name="tel"]').val();
  var email = jQuery('#form1').find('input[name="email"]').val();
  var textarea = jQuery('#form1').find('input[name="textarea"]').val();
  
  jQuery.post(
  "/contact.php",
  {
  name: name,
  tel: tel,
  email: email,
  textarea: textarea
  }),
        jQuery('#modal_window').animate({opacity: 'show'}, 400);
		setTimeout(function(){
  			jQuery('#modal_window').animate({opacity: 'hide'}, 400);
		},3000);
	jQuery('#form1 input[type="text"]').val('');
	jQuery('#form1 input[type="tel"]').val('');
	jQuery('#form1 input[type="email"]').val('');
	jQuery('#form1 input[type="textarea"]').val('');
         } 
      });
	  
	  
	  
	  
	  
	  
	 

});	



