var playerInstance = jwplayer("myElement");
playerInstance.setup({
    hlshtml: true,


//HUOM POISTETTU VÄLILYÖNNIT KAHESTA EKASTA, MYÖS MUSIC JA INDEX
    playlist: [{
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi-Abiogenesis.mp3",
        image: "exist.jpg",
        title: "Cyranoi - Abiogenesis"

    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi-Pioneers.mp3",
        image: "exist.jpg"
    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Lucid Dream.mp3",
        image: "challengerdeep.jpg"
    },

    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Flesh And Mind (ft. Sithu Aye).mp3"
    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Avarice.mp3"
    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Event Horizon (ft. Niklas Turunen).mp3"
    },

    ]
});
//valmiit playlistit molemmille EP
//HUOM POISTETTU VÄLILYÖNNIT KAHESTA EKASTA, MYÖS MUSIC JA INDEX testaus add button eikä jquery append() oikein toimi niillä
var playlistEP1 = [{
    "file":"http://users.metropolia.fi/~neahu/music/Cyranoi-Abiogenesis.mp3", 
    "image":"exist.jpg", 
    "title": "Abiogenesis"
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi-Pioneers.mp3", 
    "image": "exist.jpg", 
    "title": "Pioneers"
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Flesh And Mind (ft. Sithu Aye).mp3", 
    "image":"exist.jpg", 
    "title": "Flesh And Mind (ft. Sithu Aye)"
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Avarice.mp3", 
    "image":"exist.jpg", 
    "title": "Avarice"
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Event Horizon (ft. Niklas Turunen).mp3", 
    "image":"exist.jpg", 
    "title": "Event Horizon (ft. Niklas Turunen)"
    }];

    var playlistEP2 = [{
        "file":"http://users.metropolia.fi/~neahu/music/Cyranoi - Within Understanding Lies Acceptance.mp3", 
        "image":"challengerdeep.jpg", 
        "title": "Within Understanding Lies Acceptance"
        },{
        "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Challenger Deep.mp3", 
        "image": "challengerdeep.jpg", 
        "title": "Challenger Deep"
        },{
        "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Lucid Dream.mp3", 
        "image": "challengerdeep.jpg", 
        "title": "Lucid Dream"
        },{
        "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Another Sun To Embrace Us.mp3", 
        "image": "challengerdeep.jpg", 
        "title": "Another Sun To Embrace Us"
        }];
        //lataa playlistin soittimeen kun painettu kuvaa
    function loadPlaylist(thePlaylist) {
        jwplayer('myElement').load(thePlaylist)
        jwplayer().play();
    }

//--nea säätää että biisit soi --//
//tämä on se functio jonka avulla biisit lähtee soimaan
function playThisVideo(fileName, imageName) { 
    jwplayer('myElement').load([{ file: fileName, image: imageName }]); jwplayer().play(); }

//tässä biisit tungetaan jwplayerin tietoisuuteen kuvan kanssa ja että ei ala soimaan auto
//HUOM 2 EKAA POISTETTU VÄLILYÖNNIT MYÖS YLEMPÄNÄ JA MUSIC
// kaikissa ei ole vielä määritelty titleä, tarttetaanko missä näkyy?
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi-Abiogenesis.mp3', image: 'exist.jpg', title: 'Abiogenesis', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi-Pioneers.mp3', image: 'exist.jpg', title: 'Pioneers',autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Flesh And Mind (ft. Sithu Aye).mp3', image: 'exist.jpg', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Avarice.mp3', image: 'exist.jpg', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Event Horizon (ft. Niklas Turunen).mp3', image: 'exist.jpg', autostart: false });

jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Within Understanding Lies Acceptance.mp3', image: 'challengerdeep.jpg', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Challenger Deep.mp3', image: 'challengerdeep.jpg', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Lucid Dream.mp3', image: 'challengerdeep.jpg', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Another Sun To Embrace Us.mp3', image: 'challengerdeep.jpg', autostart: false });
//--nea säätää että biisit soi --//

//-- oma soittolistalisäys nappula asiat--//
// -- tää pitää muokata, ei tuu oikeesti toimimaan ehkä näin vaan ehkä näin https://stackoverflow.com/questions/17220793/jwplayer-append-file-to-playlist --//
$(document).ready(function(){
    $("#add1").click(function(){
        $(".playlist").append("<p><a href=javascript:playThisVideo('http://users.metropolia.fi/~neahu/music/Cyranoi-Abiogenesis.mp3','exist.jpg');>Abiogenesis</a></p>");
     
    });
 
    $("#add2").click(function(){
        $(".playlist").append("<p><a href=javascript:playThisVideo('http://users.metropolia.fi/~neahu/music/Cyranoi-Pioneers.mp3','exist.jpg');>Pioneers</a></p>");
     
    });

   
});
// tällä saa pushattua valmiiseen soittolistaan lisää asioita, testi että toimisko meijän käyttöön
/*jwplayer("container").setup({
    height: 254,
    width: 720,
    file: "http://content.bitsontherun.com/videos/nPripu9l-60830.mp4",
    image: "http://content.bitsontherun.com/thumbs/nPripu9l-320.jpg",
    title: "Big Buck Bunny trailer",
    listbar: {
    position: "right",
    size: 280,
    },
    primary: 'flash'
}); 
function addVideo(videoUrl, videoThumb, videoTitle) {
    var playlist = jwplayer().getPlaylist();
    var newItem = {
        file: videoUrl,
        image: videoThumb,
        title: videoTitle
    };
    playlist.push(newItem);
    jwplayer().load(playlist);
}
</script>
<p>Click on one of the links below to add an item to the player:</p>
<ul>
<li><a href="http://www.longtailvideo.com/support/jw-player/jw-player-for-flash-v5/16026/loading-a-playlist-into-the-player#" onclick="addVideo('http://content.bitsontherun.com/videos/yj1shGJB-60830.mp4', 'http://content.bitsontherun.com/thumbs/yj1shGJB-320.jpg', 'Sintel trailer'); return false;">Add the Sintel trailer to the playlist</a></li>
<li><a href="http://www.longtailvideo.com/support/jw-player/jw-player-for-flash-v5/16026/loading-a-playlist-into-the-player#" onclick="addVideo('http://content.bitsontherun.com/videos/i8oQD9zd-kNspJqnJ.mp4', 'http://content.bitsontherun.com/thumbs/i8oQD9zd-640.jpg', 'Tears of Steel'); return false;">Add the Tears of Steel trailer to the playlist</a></li>
</ul>
</body>
</html> */


