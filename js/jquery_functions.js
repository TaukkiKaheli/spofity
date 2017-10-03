$(".playerbtn").click(function(){
    $(this).css("background-color", "red");
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
    $(".album").toggle(function(){
        $(".player").hide();
        $(".myElement").hide();
        $(".infobtn").show();
        $(".info").show();
        
    });
});

$(".homebtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".album").hide();
    $(this).css("background-color", "red");
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
    $(this).css("background-color", "red");
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
    $(this).css("background-color", "red");
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
    $(this).css("background-color", "red");
    $(".bio").show();
    $(".info").hide();
    $(".infobtn").hide();
});

// ---- BROWSE EP ALASVEDOT ---- //
$("#alas1").click(function(){
    $(".ep1piilo").slideToggle();
    $(".ep2piilo").slideUp();
});

$("#alas2").click(function(){
    $(".ep2piilo").slideToggle();
    $(".ep1piilo").slideUp();
});

$("#luku1").click(function(){
    $(".ep1piilo").slideToggle();
    $(".ep2piilo").slideUp();
});

$("#luku2").click(function(){
    $(".ep2piilo").slideToggle();
    $(".ep1piilo").slideUp();
});
// ---- BROWSE EP ALASVEDOT ---- //