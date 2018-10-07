
app.fav = [
    {name: 'Youtube', url: 'https://www.youtube.com/?gl=TW&hl=zh-TW', icon: 'fa-youtube'},
    {name: 'Translate', url: 'https://translate.google.com.tw/?hl=zh-TW', icon: 'fa-language'},
    {name: 'Steam', url: 'https://store.steampowered.com/', icon: 'fa-steam'},
    {name: 'Twitch', url: 'https://twitch.tv/', icon: 'fa-twitch'},
    {name: 'Yahoo', url: 'https://tw.yahoo.com/', icon: 'fa-yahoo'},
    {name: 'Gmail', url: 'https://www.google.com/intl/zh-TW/gmail/about/#', icon: 'fa-envelope'},
    {name: 'Drive', url: 'https://www.google.com/intl/zh-TW_ALL/drive/', icon: 'fa-cloud-upload'},
    {name: 'Instagram', url: 'https://www.instagram.com/', icon: 'fa-instagram'},
    {name: 'Twitter', url: 'https://www.twitter.com/', icon: 'fa-twitter'},
    {name: 'Facebook', url: 'https://www.facebook.com/', icon: 'fa-facebook-square '},
    {name: 'Github', url: 'https://www.github.com/', icon: 'fa-github-alt'},
    {name: 'Soundcloud', url: 'https://www.soundcloud.com/', icon: 'fa-soundcloud '}
];

Vue.component('fav-site', {
    props: ['icon', 'text', 'url', 'theme'],
    data: app.data,
    template: '<li>' +
    '<a v-bind:href="url" v-bind:class="{\'white-text\': theme}">' +
    '<i v-bind:class="[\'fa\', icon]"></i><label>{{text}}</label>' +
    '</a>' +
    '</li>'
});

// const favTemplate = document.querySelector('#fav-item');
// for (let i in fav) {
//     const favItem = fav[i];
//     let el = favTemplate.content.cloneNode(true);
//     el.querySelector('a').href = favItem.url;
//     el.querySelector('i').classList.add('material-icons');
//     el.querySelector('i').innerHTML = favItem.icon;
//     el.querySelector('lable').innerHTML = favItem.name;
//     console.log(favItem);
//     document.getElementById('fav-menu').appendChild(el);
// }
