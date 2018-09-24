
const fav = [
    {name: 'Youtube', url: 'https://www.youtube.com/?gl=TW&hl=zh-TW', icon: ''},
    {name: 'Translate', url: 'https://translate.google.com.tw/?hl=zh-TW', icon: ''},
    {name: 'Steam', url: 'https://store.steampowered.com/', icon: ''},
    {name: 'Twitch', url: 'https://twitch.tv/', icon: ''},
    {name: 'Yahoo', url: 'https://tw.yahoo.com/', icon: ''},
    {name: 'Gmail', url: 'https://www.google.com/intl/zh-TW/gmail/about/#', icon: ''},
    {name: 'Drive', url: 'https://www.google.com/intl/zh-TW_ALL/drive/', icon: ''},
    {name: 'Instagram', url: 'https://www.instagram.com/', icon: ''},
    {name: 'Twitter', url: 'https://www.twitter.com/', icon: ''},
    {name: 'Facebook', url: 'https://www.facebook.com/', icon: ''},
    {name: 'Github', url: 'https://www.github.com/', icon: ''},
    {name: 'Soundcloud', url: 'https://www.soundcloud.com/', icon: ''}
];

const favTemplate = document.querySelector('#fav-item');
for (let i in fav) {
    const favItem = fav[i];
    let el = favTemplate.content.cloneNode(true);
    el.querySelector('a').href = favItem.url;
    el.querySelector('p').innerHTML = favItem.name;
    console.log(favItem);
    document.getElementById('fav-menu').appendChild(el);
}
