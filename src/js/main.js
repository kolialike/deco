jQuery(function($){
  $('select').selectric();
  var servicePrItem = $(".services-price-item-ins")
  servicePrItem.on('click', function(event) {
  	$(this).toggleClass('active');
  });
  

});
