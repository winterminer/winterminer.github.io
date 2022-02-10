const btn = document.querySelector('#main-btn');
const url = "tg://resolve?domain=hctestserver";
btn.addEventListener("click", function() {
    window.location.href = url;
});

btn.innerHTML = "Join t.me/" + url.replace("tg://resolve?domain=", "");