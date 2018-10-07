
Vue.component('news-card', {
    props: ['newsLink', 'imgUrl', 'newsTitle', 'description'],
    template: '<a v-bind:href="newsLink"><div class="ui card">' +
    '<div class="image">' +
    '<img v-bind:src="imgUrl" style="height: 180px">' +
    '</div>' +
    '<div class="content">' +
    '<div class="header">{{newsTitle}}</div>' +
    '<div class="description">{{description}}</div>' +
    '</div>' +
    '</div></a>'
});

function getNews() {
    let url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=tw&' +
        'apiKey=bfd3a0c288ba49f4bf0ffaf669caef43';
    let req = new Request(url);
    fetch(req)
        .then(function(response) {
            response.json().then(function (res) {
                app.newsData = res.articles.slice(0, 6);
            });
        });
}
