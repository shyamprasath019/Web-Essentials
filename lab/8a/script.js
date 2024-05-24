document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav a');
    var message = document.getElementById('message');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var selectedMenu = this.id;
            message.textContent = "You selected " + selectedMenu + ".";
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
