

$( document ).ready(function() {
    $( "#nav" ).load( "../nav.html" );
});

$( document ).ready(function() {
  $(".main-nav .openlink").click(function(){
    $(".main-nav .navitems").toggleClass("open");
  });

  $(".main-nav .closelink").click(function(){
    $(".main-nav .navitems").toggleClass("open");
  });
});
