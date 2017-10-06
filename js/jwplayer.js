var playerInstance = jwplayer("myElement");
playerInstance.setup({
    hlshtml: true,



    playlist: [{
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Abiogenesis.mp3",
        image: "exist.jpg",
        title: "Cyranoi - Abiogenesis"

    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Pioneers.mp3",
        image: "exist.jpg"
    },

    ]
});
//valmiit playlistit molemmille EP
var playlistEP1 = [{
    "file":"http://users.metropolia.fi/~neahu/music/Cyranoi - Abiogenesis.mp3", 
    "image":"exist.jpg", 
    "title": "Abiogenesis"
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Pioneers.mp3", 
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
//-- tämä functio lisää uuden biisin soittolistaan --//
function addMusic(fileName, imageName, titleName) {
    var playlist = jwplayer().getPlaylist();
    var newItem = {
        file: fileName,
        image: imageName,
        title: titleName
    };
    playlist.push(newItem);
    jwplayer().load(playlist);
   
        console.log(newItem.title);
        
        document.getElementById("playlist").innerHTML += newItem.title;
       
        
    //tällä saa consolissa näkymään lisättyjen biisien nimet
    //console.log(newItem.title);
}
//document.getElementById("playlist").innerHTML = newItem.title;
//-- tämä functio lisää uuden biisin soittolistaan --//

//tämä on se functio jonka avulla biisit lähtee soimaan//
function playThisVideo(fileName, imageName) { 
    jwplayer('myElement').load([{ file: fileName, image: imageName }]); jwplayer().play(); }
//tämä on se functio jonka avulla biisit lähtee soimaan//

//tässä biisit tungetaan jwplayerin tietoisuuteen kuvan kanssa ja että ei ala soimaan auto

jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Abiogenesis.mp3', image: 'exist.jpg', title: 'Abiogenesis', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Pioneers.mp3', image: 'exist.jpg', title: 'Pioneers',autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Flesh And Mind (ft. Sithu Aye).mp3', image: 'exist.jpg', title: 'Flesh And Mind (ft. Sithu Aye)',autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Avarice.mp3', image: 'exist.jpg', title: 'Avarice', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Event Horizon (ft. Niklas Turunen).mp3', image: 'exist.jpg', title: 'Event Horizon (ft. Niklas Turunen)',autostart: false });

jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Within Understanding Lies Acceptance.mp3', image: 'challengerdeep.jpg', title: 'Within Understanding Lies Acceptance', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Challenger Deep.mp3', image: 'challengerdeep.jpg', title: 'Challenger Deep',autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Lucid Dream.mp3', image: 'challengerdeep.jpg', title: 'Lucid Dream', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Another Sun To Embrace Us.mp3', image: 'challengerdeep.jpg', title: 'Another Sun To Embrace Us',autostart: false });
//--nea säätää että biisit soi --//


// -- https://stackoverflow.com/questions/17220793/jwplayer-append-file-to-playlist --//



