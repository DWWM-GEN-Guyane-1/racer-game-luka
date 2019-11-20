window.addEventListener('keydown', function (event){
    // largeur et hauteur de la page web



// si la touche du clavier appuyée est la flèche gauche 
if (event.key=="ArrowLeft"){
// si la position à gauche est suppérieure à 0, on se déplace de 10 à droitz (-10 à gauche)
 $("#vj").animate({
   left: "-=100"});
  }
   
   else {
     // si la touche du clavier appuyée est la flèche bas 
    if (event.key=="ArrowDown"){
    // si la position en bas est inférieure à la hauteur de la fenetre, on se déplace de 10 vers le bas (+10 en bas)
     
      $("#vj").animate({
        top: "+=100"});
      }
     
    
    else 
    {
             // si la touche du clavier appuyée est la flèche haut
      if (event.key=="ArrowUp"){
// si la position en haut est suppérieure à 0, on se déplace de 10 vers le haut (-10 en bas)
     
               
                   $("#vj").animate({
                    top: "-=100"});
                  
           }
      else 
      {
        // si la touche du clavier appuyée est la flèche droite 
        if (event.key=="ArrowRight"){
           // si la position à droite est inférieur à la largeur de la page, on se déplace de 10 à gauche (+10 à gauche)
     
             
              $("#vj").animate({
                 left: "+=100"});
         
            
           }
       
       }
     }}
   
  });
  