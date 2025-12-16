function callAPI() {
fetch("http://localhost:3000/api/hello")
.then(res => res.json())
.then(data => {
document.getElementById("result").innerText = data.message;
})
.catch(err => {
document.getElementById("result").innerText = "Không gọi được backend";
});
}