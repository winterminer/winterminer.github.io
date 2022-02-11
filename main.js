const btn = document.querySelector('#main-btn');
const url = "tg://resolve?domain=teenminers";
btn.addEventListener("click", function() {
    window.location.href = url;
});

btn.innerHTML = "t.me/" + url.replace("tg://resolve?domain=", "");
