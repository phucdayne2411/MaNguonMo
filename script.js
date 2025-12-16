// Đọc thêm / Thu gọn
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", () => {
        const article = button.parentElement;
        const shortText = article.querySelector(".short");
        const fullText = article.querySelector(".full");

        shortText.classList.toggle("hidden");
        fullText.classList.toggle("hidden");

        button.textContent =
            button.textContent === "Đọc thêm" ? "Thu gọn" : "Đọc thêm";
    });
});

// Dark mode
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
