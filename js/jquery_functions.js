$(".playerbtn").click(function(){
    $(this).css("background-color", "rgba(212,190,170,1)");
    $(".album").show();
    $(".homebtn").css("background-color", "black");
    $(".home").hide();
    $(".browsebtn").css("background-color", "black");
    $(".browse").hide();
    $(".playlistbtn").css("background-color", "black");
    $(".playlist").hide();
    $(".biobtn").css("background-color", "black");
    $(".bio").hide();
    $(".info").hide();
    $(".infobtn").show();
});

$(".infobtn").click(function(){
    $(".infotitle").empty();
    $(".infolyrics").empty();
    $(".jw-title-primary").clone().appendTo(".infotitle");
    $(".jw-title-secondary").clone().appendTo(".infolyrics");
    $(".album").toggle(function(){
        $(".player").hide();
        $(".myElement").hide();
        $(".infobtn").show();
        $(".info").show();
        $(".infotitle").show();
        $(".infolyrics").show();
    });
});

$(".homebtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".album").hide();
    $(this).css("background-color", "rgba(212,190,170,1)");
    $(".home").show();
    $(".browsebtn").css("background-color", "black");
    $(".browse").hide();
    $(".playlistbtn").css("background-color", "black");
    $(".playlist").hide();
    $(".biobtn").css("background-color", "black");
    $(".bio").hide();
    $(".info").hide();
    $(".infobtn").hide();
});

$(".browsebtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".album").hide();
    $(".homebtn").css("background-color", "black");
    $(".home").hide();
    $(this).css("background-color", "rgba(212,190,170,1)");
    $(".browse").show();
    $(".playlistbtn").css("background-color", "black");
    $(".playlist").hide();
    $(".biobtn").css("background-color", "black");
    $(".bio").hide();
    $(".info").hide();
    $(".infobtn").hide();
});

$(".playlistbtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".album").hide();
    $(".homebtn").css("background-color", "black");
    $(".home").hide();
    $(".browsebtn").css("background-color", "black");
    $(".browse").hide();
    $(this).css("background-color", "rgba(212,190,170,1)");
    $(".playlist").show();
    $(".biobtn").css("background-color", "black");
    $(".bio").hide();
    $(".info").hide();
    $(".infobtn").hide();
});

$(".biobtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".album").hide();
    $(".homebtn").css("background-color", "black");
    $(".home").hide();
    $(".browsebtn").css("background-color", "black");
    $(".browse").hide();
    $(".playlistbtn").css("background-color", "black");
    $(".playlist").hide();
    $(this).css("background-color", "rgba(212,190,170,1)");
    $(".bio").show();
    $(".info").hide();
    $(".infobtn").hide();
});

// ---- BROWSE EP ALASVEDOT ---- //
$(".alaspainike1").click(function(){
    $('.iconpic1').toggleClass('iconpic11');
    $(".ep1piilo").slideToggle();
    $(".ep2piilo").slideUp();
    $(".alaspainike2").removeClass('iconpic22');
    $(".iconpic2").removeClass('iconpic22');     
    $('.alaspainike1').toggleClass('alaspainike11');
    $(".alaspainike2").removeClass('alaspainike22');  
	//$(".iconpic1").css("color", "red");
	//$(".iconpic2").css("color", "rgba(255, 255, 255, 0.95)");
	//$(".alaspainike1").css("background-color", "rgba(0, 0, 0, 0.2)");
	//$(".alaspainike2").css("background-color", "rgba(0,0,0,0)");
});

$(".alaspainike2").click(function(){
    $('.iconpic2').toggleClass('iconpic22');
    $(".ep2piilo").slideToggle();
    $(".ep1piilo").slideUp();
    $(".alaspainike1").removeClass('.iconpic11'); 
    $(".iconpic1").removeClass('iconpic11'); 
    $('.alaspainike2').toggleClass('alaspainike22');
    $(".alaspainike1").removeClass('alaspainike11');  
	//$(".iconpic2").css("color", "red");
	//$(".iconpic1").css("color", "rgba(255, 255, 255, 0.95)");
	//$(".alaspainike2").css("background-color", "rgba(0, 0, 0, 0.2)");
	//$(".alaspainike1").css("background-color", "rgba(0,0,0,0)");
});

