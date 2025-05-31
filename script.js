params = new URLSearchParams(window.location.search);
fetch(`./markdown/${params.get("page")}.md`).then((res) => {
    res.text().then((text) => {
        document.getElementById("md-content").innerHTML = marked.parse(text);
    });
});