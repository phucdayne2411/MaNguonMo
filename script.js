function readMore(title, content) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-text").innerText = content;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
