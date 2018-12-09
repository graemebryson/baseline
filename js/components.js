// ====================================================================================================
// JS / Components
// ====================================================================================================

// Components — Accordion
// --------------------------------------------------

jQuery(function($){
  // Collapse all
  $('.accordion .item').addClass('state--collapsed');
  // Toggle selected, collapse others
  $('.accordion .item').find('.item__toggle').click(function(){
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('state--expanded state--collapsed');
    $(".accordion .item__toggle").not($(this)).parent().removeClass('state--expanded').addClass('state--collapsed');
    $(".item__content").not($(this).next()).slideUp('fast');
  });
});
