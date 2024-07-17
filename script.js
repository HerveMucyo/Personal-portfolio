let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
};

document.querySelectorAll('.learn-more-link').forEach(link => {
    link.addEventListener('click', () => {
        const description = link.nextElementSibling;
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
        link.textContent = description.style.display === 'block' ? 'Show Less' : 'Learn More';
    });
});