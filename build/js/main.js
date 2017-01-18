jQuery(function($){
	// select
	$('select').selectric();
	var servicePrItem = $(".services-price-item-ins")
	servicePrItem.on('click', function(event) {
		$(this).toggleClass('active');
	});
	// select
  

  // menu
  var body = $("body");
	var menuBurger = $(".menu-burger");
    menuBurger.on('click', function(event) {
        event.preventDefault();
        body.toggleClass('mobile-menu-open');
    });
    var mobileMenu = $(".mobile-menu");
    mobileMenu.on('click', function(event) {
        event.preventDefault();
        body.removeClass("mobile-menu-open");
    });
    var mobileMenuItem = $(".mobile-menu-item");
    mobileMenuItem.on('click', function(event) {
        var thisLala = event.target;
        if(!$(thisLala).data('lang')) event.stopPropagation();
    });
  // menu



  	// buttom-scroll
     $(".main-content-text-price").on('click', function(event) {
      var $mainContant = $('.main-content'); 
      var menuTop = $mainContant.height();
      $("body, html").animate({scrollTop: menuTop + "px"}, 1000);
    });
  	// buttom-scroll
});