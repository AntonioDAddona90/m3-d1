
    document.addEventListener('DOMContentLoaded', function () {
        var twitterLink = document.querySelector('.blog-sidebar a[href="https://twitter.com"]');
        if (twitterLink) {
            twitterLink.parentNode.remove(); // Rimuovi l'elemento padre del link Twitter
        }
    });

    
    document.addEventListener('DOMContentLoaded', function () {
        var continuaLink = document.querySelector('.jumbotron a.font-weight-bold');
        if (continuaLink) {
            continuaLink.addEventListener('click', function (event) {
                event.preventDefault();
                var postElement = this.closest('.blog-post');
                if (postElement) {
                    postElement.remove(); // Rimuovi l'elemento padre del link "Continua a leggere"
                }
            });
        }
    });

    
    document.addEventListener('DOMContentLoaded', function () {
        var autoreLinks = document.querySelectorAll('.blog-post a[href="#"]');
        autoreLinks.forEach(function (autoreLink) {
            autoreLink.addEventListener('mouseover', function () {
                var autoreNome = this.textContent;
                alert('Nome dell\'autore: ' + autoreNome);
            });
        });
    });



