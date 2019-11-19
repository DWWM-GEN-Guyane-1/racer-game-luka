$(document).ready(function () {
            $(document).keydown(function (e) {
                switch (e.which) {
                    case 37: // flèche gauche
                        $(".myDiv").finish().animate({
                            left: "-=10"
                        });
                        break;
                    case 39: // flèche droite
                        $(".myDiv").finish().animate({
                            left: "+=10"
                        });
                        break;
                }

                document.addEventListener('keypress', logKey);
                console.log('keypress')

                function logKey(e) {
                    log.textContent += ` ${e.code}`;
                }
            });
        });