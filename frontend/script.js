function callAPI() {
  fetch("https://ma-nguon-mo.onrender.com/api/hello")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Backend lỗi ❌";
    });
}
