$(".playerbtn").click(function(){
    $(this).css("background-color", "red");
    $(".albumcover").show();
    $(".homebtn").css("background-color", "black");
    $(".home").hide();
    $(".browsebtn").css("background-color", "black");
    $(".browse").hide();
    $(".playlistbtn").css("background-color", "black");
    $(".playlist").hide();
    $(".biobtn").css("background-color", "black");
    $(".bio").hide();
});

$(".homebtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".albumcover").hide();
    $(this).css("background-color", "red");
    $(".home").show();
    $(".browsebtn").css("background-color", "black");
    $(".browse").hide();
    $(".playlistbtn").css("background-color", "black");
    $(".playlist").hide();
    $(".biobtn").css("background-color", "black");
    $(".bio").hide();
});

$(".browsebtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".albumcover").hide();
    $(".homebtn").css("background-color", "black");
    $(".home").hide();
    $(this).css("background-color", "red");
    $(".browse").show();
    $(".playlistbtn").css("background-color", "black");
    $(".playlist").hide();
    $(".biobtn").css("background-color", "black");
    $(".bio").hide();
});

$(".playlistbtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".albumcover").hide();
    $(".homebtn").css("background-color", "black");
    $(".home").hide();
    $(".browsebtn").css("background-color", "black");
    $(".browse").hide();
    $(this).css("background-color", "red");
    $(".playlist").show();
    $(".biobtn").css("background-color", "black");
    $(".bio").hide();
});

$(".biobtn").click(function(){
    $(".playerbtn").css("background-color", "black");
    $(".albumcover").hide();
    $(".homebtn").css("background-color", "black");
    $(".home").hide();
    $(".browsebtn").css("background-color", "black");
    $(".browse").hide();
    $(".playlistbtn").css("background-color", "black");
    $(".playlist").hide();
    $(this).css("background-color", "red");
    $(".bio").show();
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
// ---- BROWSE EP ALASVEDOT ---- //
