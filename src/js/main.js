jQuery(function($){
  $('select').selectric();

  $(".services-price-item-ins").on('click', function(event) {
  	$(this).toggleClass('active');
  });
});
