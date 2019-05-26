const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "我在那一角落患过伤风",
        artist: '冯曦妤',
        url: 'http://www.ytmp3.cn/down/51671.mp3',
        cover: 'http://imge.kugou.com/stdmusic/240/20150718/20150718140247260249.jpg',
      },
      {
        name: "yesterday once more",
        artist: 'Carpenters',
        url: 'http://www.ytmp3.cn/down/50334.mp3',
        cover: 'http://img.ytmp3.cn/image/77.jpg',
      },
    ]
});