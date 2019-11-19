$(document).ready(function () {
            $(document).keydown(function (e) {
                switch (e.which) {
                    // case 37: // flèche gauche
                    //     $(".myDiv").finish().animate({
                    //         left: "-=10"
                    //     });
                    //     break;
                    case 39: // flèche droite
                        $("#active1").finish().animate({
                            left: "+=10"
                        });
                        break;
                }

                document.addEventListener('keypress', logKey);
                console.log(logKey)

                function logKey(e) {
                    log.textContent += ` ${e.code}`;
                }
            });
           if (event.key=="ArrowLeft"){
               if (documentElementById("#active1").offsetLeft<0){
                   $("#active1").animate({
                       left: "-=10"});
                   };
               }
           });
