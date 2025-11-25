const btn = document.getElementById("funBtn");

btn.addEventListener("mouseover", () => {
    const newX = Math.random() * (window.innerWidth - btn.clientWidth);
    const newY = Math.random() * (window.innerHeight - btn.clientHeight);
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;

    btn.style.transform = "scale(1.1)";
    setTimeout(() => btn.style.transform = "scale(1)", 100);
});

btn.addEventListener("click", () => {
    alert("Whoa! You actually caught me! 😲");
});
