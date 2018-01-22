$( document ).ready(function()
{
  $("#cover").animate({
  opacity:0,
  },5000,function() { $(this).remove(); });
  
    $("#contact").click(function(){
      alert('Youtube- KingWolf v2 Instagram- Cohven   Kik-OpsWolf ');
    });

    $("#fade-to-black").click(function(){
      // make the jumbotron black
      $(".jumbotron").toggleClass("blackout");
    });
    
$("#change-page").click(function() {
  $("body").toggleClass("crazy-styles");

  $('#v2').click(function(){
    console.log("hi")
   $('#v2').attr('src', "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2013/08/New-YouTube-Logo.png");
});
});


var currentIndex = 0,
  items = $('.contain div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.contain div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});


});

