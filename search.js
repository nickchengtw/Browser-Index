
//send keyword to google
let searchGoogle = function (el) {
    document.getElementById('search-field').value = el.innerHTML;
    document.getElementById('search-form').submit();
};

//vue component for prediction
Vue.component('sugg-str', {
    props: ['sugg'],
    template: '<div class="ui segment" ' +
    'style="text-align: left;" onclick="searchGoogle(this)"' +
    '>{{sugg}}</div>'
});

document.onkeydown = function (event) {
    if (event.keyCode === 40
        && app.select < app.suggLen - 1) {
        app.select += 1;
        app.search =
            app.suggs[app.select].name;
    } else if (event.keyCode === 38
        && app.select > 0) {
        app.select -= 1;
        app.search =
            app.suggs[app.select].name;
    } else if (event.keyCode === 13) {
        document.getElementById('search-field').value =
        app.suggs[app.select].name;
        document.getElementById('search-form').submit();
    }
};

function clearSelete() {
    app.select = -1
}

//build data
function autoComplete(data) {
    let el = document.createElement('div');
    el.classList.add('item');
    document.getElementById('autocomplete');

    let suggData = [];
    app.seen = !(data[1].length < 1);
    app.suggLen = data[1].length;
    for (let i = 0; i < data[1].length; i++) {
        suggData[i] = {};
        suggData[i].name = data[1][i][0]
            .replace(/\u0026#39;/g, "'")
            .replace(/&amp;/g, '&');
        suggData[i].id = i;
    }
    app.suggs = suggData;
}

//get auto-complete from google
function getGoogleSugg(el) {
    let script = document.createElement('script');

    //auto-complete server address
    script.src =
        'https://www.google.com/complete/search?client=psy-ab&hl=zh-TW&gs_rn=64&gs_ri=psy-ab&cp=1&gs_id=1r&' +
        'q=' + el.value +
        '&xhr=t&callback=autoComplete';

    document.getElementsByTagName('head')[0].appendChild(script);
}
