$(document).ready(function () {
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate')
    });

    $('.ll').click(function () {
        $(this).find('.fundo-none').toggleClass('fundo-view')
    });

    class MobileNavbar {
        constructor(mobileMenu, sideBar) {
            this.mobileMenu = document.querySelector(mobileMenu);
            this.sideBar = document.querySelector(sideBar);
            this.activeClass = "active";
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.sideBar.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
        }

        addClickEvent() {
            this.mobileMenu.addEventListener("click", () => {
                this.handleClick();
            })
        }
    }
    const mobileMenu = new MobileNavbar(".mobile-menu", ".side-bar");
    mobileMenu.addClickEvent();

    document.querySelector("a[name='logout']").addEventListener("click", function () {
        firebase.auth().signOut()
            .then((docref) => {
                localStorage.setItem('sessionOn', "não");
                window.location.href = "http://127.0.0.1:5500/login/P%C3%A1gina-1.html";
            })
            .cath((error) => {
                alert(error.message);
            });
    })
});