

  const viewWork = document.getElementById('view-work');
  const images = document.getElementById('#images');

  viewWork.addEventListener('click', function(){
    
  });



//jquery to animate movement
$('#view-work').on('click', function(){
    const images = $('#images').position().top;


    $('html, body').animate({
        scrollTop:images
    },
    900
    );
});
