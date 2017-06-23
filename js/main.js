document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

$('#mainNav').affix({
  offset: {
    top: 100
  }
})