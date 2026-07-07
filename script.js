function showMessage() {
    alert("Welcome to CrowdSourced Community!");
}

// Highlight the current page in the navigation
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "yellow";
    }
});

// Footer year
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML = "&copy; " + new Date().getFullYear() + " CrowdSourced Community. All Rights Reserved.";
}
