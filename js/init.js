
let cookie = {};
try {
    cookie = JSON.parse(document.cookie);
} catch (err) {
    document.cookie = '{"theme": "white"}'
}

if (cookie.theme === 'white') {
    app.darkTheme = false;
    document.styleSheets[6].disabled = true
}
