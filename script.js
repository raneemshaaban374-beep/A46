const input = document.getElementById("text")
const result = document.getElementById("result")

result.innerHTML = localStorage.getItem("text") || ""

document.getElementById("save").addEventListener("click", function(e) {
    localStorage.setItem("text", input.value)
    result.innerHTML = input.value
});