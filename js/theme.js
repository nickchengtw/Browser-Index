
function switchTheme(el) {
    let stylesheet = document.styleSheets[6];
    stylesheet.disabled = !el.checked;
    cookie.theme = (el.checked ? 'dark' : 'white');
    app.darkTheme = el.checked;
    document.cookie = JSON.stringify(cookie)
}
