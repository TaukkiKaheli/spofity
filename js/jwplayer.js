var playerInstance = jwplayer("myElement");
playerInstance.setup({
    hlshtml: true,

    playlist: [{
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Abiogenesis.mp3",
        image: "exist.jpg",
        title: "Cyranoi - Abiogenesis",
        description:"asd asd asda sd abiogenesis1"

    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Pioneers.mp3",
        image: "exist.jpg",
        title: "Cyranoi - Pioneers",
        description:"asd asd asda sd pioneers1"
    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Flesh And Mind (ft. Sithu Aye).mp3", 
        image:"exist.jpg", 
        title: "Flesh And Mind (ft. Sithu Aye)",
        description:'asd asd asda sd flesh1'
    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Avarice.mp3", 
        image:"exist.jpg", 
        title: "Avarice",
        description:'asd asd asda sd avarice1'
    },
    {
        file: "http://users.metropolia.fi/~neahu/music/Cyranoi - Event Horizon (ft. Niklas Turunen).mp3", 
        image:"exist.jpg", 
        title: "Event Horizon (ft. Niklas Turunen)",
        description:'asd asd asda sd event1'
    }
    ]
});

//valmiit playlistit molemmille EP
var playlistEP1 = [{
    "file":"http://users.metropolia.fi/~neahu/music/Cyranoi - Abiogenesis.mp3", 
    "image":"exist.jpg", 
    "title": "Abiogenesis",
    "description":'asd asd asda sd abiogenesis2'
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Pioneers.mp3", 
    "image": "exist.jpg", 
    "title": "Pioneers",
    "description":'asd asd asda sd pioneers2'
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Flesh And Mind (ft. Sithu Aye).mp3", 
    "image":"exist.jpg", 
    "title": "Flesh And Mind (ft. Sithu Aye)",
    "description":'asd asd asda sd flesh2'
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Avarice.mp3", 
    "image":"exist.jpg", 
    "title": "Avarice",
    "description":'asd asd asda sd avarice2'
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Event Horizon (ft. Niklas Turunen).mp3", 
    "image":"exist.jpg", 
    "title": "Event Horizon (ft. Niklas Turunen)",
    "description":'asd asd asda sd event2'
    }];

var playlistEP2 = [{
    "file":"http://users.metropolia.fi/~neahu/music/Cyranoi - Within Understanding Lies Acceptance.mp3", 
    "image":"challengerdeep.jpg", 
    "title": "Within Understanding Lies Acceptance",
    "description":'asd asd asda sd within2'
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Challenger Deep.mp3", 
    "image": "challengerdeep.jpg", 
    "title": "Challenger Deep",
    "description":'asd asd asda sd challenger2'
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Lucid Dream.mp3", 
    "image": "challengerdeep.jpg", 
    "title": "Lucid Dream",
    "description":'asd asd asda sd lucid2'
    },{
    "file": "http://users.metropolia.fi/~neahu/music/Cyranoi - Another Sun To Embrace Us.mp3", 
    "image": "challengerdeep.jpg", 
    "title": "Another Sun To Embrace Us",
    "description":'asd asd asda sd another2'
    }];
    
//lataa playlistin soittimeen kun painettu kuvaa
    function loadPlaylist(thePlaylist) {
        jwplayer('myElement').load(thePlaylist)
        jwplayer().play();
    }

//--nea säätää että biisit soi --//
//-- tämä functio lisää uuden biisin soittolistaan --//
function addMusic(fileName, imageName, titleName, descriptionName) {
    var playlist = jwplayer().getPlaylist();
    var newItem = {
        file: fileName,
        image: imageName,
        title: titleName,
        description: descriptionName
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
function playThisVideo(fileName, imageName, titleName, descriptionName) { 
    jwplayer('myElement').load([{ file: fileName, image: imageName, title: titleName, description: descriptionName }]); jwplayer().play(); }
//tämä on se functio jonka avulla biisit lähtee soimaan//

//tässä biisit tungetaan jwplayerin tietoisuuteen kuvan kanssa ja että ei ala soimaan auto

jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Abiogenesis.mp3', image: 'exist.jpg', title: 'Abiogenesis', description:'asd asd asda sd abiogenesis3', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Pioneers.mp3', image: 'exist.jpg', title: 'Pioneers', description:'asd asd asda sd pioneers3', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Flesh And Mind (ft. Sithu Aye).mp3', image: 'exist.jpg', title: 'Flesh And Mind (ft. Sithu Aye)', description:'asd asd asda sd flesh and mind3', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Avarice.mp3', image: 'exist.jpg', title: 'Avarice', description:'asd asd asda sd avarice3', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Event Horizon (ft. Niklas Turunen).mp3', image: 'exist.jpg', title: 'Event Horizon (ft. Niklas Turunen)', description:'asd asd asda sd event3', autostart: false });

jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Within Understanding Lies Acceptance.mp3', image: 'challengerdeep.jpg', title: 'Within Understanding Lies Acceptance', description:'asd asd asda sd within3', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Challenger Deep.mp3', image: 'challengerdeep.jpg', title: 'Challenger Deep', description:'asd asd asda sd challenger3', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Lucid Dream.mp3', image: 'challengerdeep.jpg', title: 'Lucid Dream', description:'asd asd asda sd blmasf lucid3', autostart: false });
jwplayer('myElement').setup({ file: 'http://users.metropolia.fi/~neahu/music/Cyranoi - Another Sun To Embrace Us.mp3', image: 'challengerdeep.jpg', title: 'Another Sun To Embrace Us', description:'asd asd asda sd another3', autostart: false });
//--nea säätää että biisit soi --//

// -- https://stackoverflow.com/questions/17220793/jwplayer-append-file-to-playlist --//