

  
  function deplace()
  {
    $('#vr').animate({top: '-=600'}, 2500, 'linear', function(){
      var vrX = Math.floor(Math.random()*194)+70;
      var vrY = 400;
      $('#vr').css('top',vrY);
      $('#vr').css('left',vrX);
       ok = 1;
    });
    $('.fond').animate({top: '-=360'}, 1000, 'linear', function(){
      $('.fond').css('top',0);
      deplace();
    });
  };
 
  $(document).keydown(function(e){
    if (e.which == 39)
    {
      vjX = parseInt($('#vj').css('left'));
      if (vjX < 280)
      $('#vj').css('left', vjX+30);
    }
    if (e.which == 37)
    {
      vjX = parseInt($('#vj').css('left'));
      if (vjX > 70)
        $('#vj').css('left', vjX-30);
    }
  });

  function collision()
  {
    vjX = parseInt($('#vj').css('left'));
    vrX = parseInt($('#vr').css('left'));
    vjY = 10;
    vrY = parseInt($('#vr').css('top'));
    if (((vrX > vjX) && (vrX < (vjX+66)) && (vrY > vjY) && (vrY < (vjY+150)) && (ok == 1)) 
    || ((vjX > vrX) && (vjX < (vrX+66)) && (vrY > vjY) && (vrY < (vjY+150)) && (ok == 1)))
  {
      collision = parseInt($('#info').text()) + 1;
      $('#info').text(collision);
      ok = 0;
    }  
  }
  



  $(document).ready(function() { 
    var ok=1;
    deplace();
    setInterval(collision, 20);
  }  );












//window.addEventListener('keydown', function (event){
    // largeur et hauteur de la page web



// si la touche du clavier appuyée est la flèche gauche 
////$("#vj").animate({
  ///}
   
   //else {
     // si la touche du clavier appuyée est la flèche bas 
    //if (event.key=="ArrowDown"){
    // si la position en bas est inférieure à la hauteur de la fenetre, on se déplace de 10 vers le bas (+10 en bas)
     
      //$("#vj").animate({
       // top: "+=100"});
      //}
     
    
   // else 
    //{
             // si la touche du clavier appuyée est la flèche haut
     // if (event.key=="ArrowUp"){
// si la position en haut est suppérieure à 0, on se déplace de 10 vers le haut (-10 en bas)
     
               
                   //$("#vj").animate({
                   // top: "-=100"});
                  
          // }
     // else 
      //{
        // si la touche du clavier appuyée est la flèche droite 
        //if (event.key=="ArrowRight"){
           // si la position à droite est inférieur à la largeur de la page, on se déplace de 10 à gauche (+10 à gauche)
     
             
              //$("#vj").animate({
                 //left: "+=100"});
         
            
           //}
       
       //}
     //}}
   
  //});
  