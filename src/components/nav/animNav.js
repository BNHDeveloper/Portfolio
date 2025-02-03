window.onscroll = () => {
    let navbar = document.querySelector('.navbar.fixed-top');
    if (navbar) {
        window.scrollY > 0 ? navbar.classList.add("affix") : navbar.classList.remove("affix");
    }
}
