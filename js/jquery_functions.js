$(".playerbtn").click(function(){
    $(".albumcover").show();
    $(".home").hide();
    $(".browse").hide();
    $(".playlist").hide();
    $(".bio").hide();
});

$(".homebtn").click(function(){
    $(".albumcover").hide();
    $(".home").show();
    $(".browse").hide();
    $(".playlist").hide();
    $(".bio").hide();
});

$(".browsebtn").click(function(){
    $(".albumcover").hide();
    $(".home").hide();
    $(".browse").show();
    $(".playlist").hide();
    $(".bio").hide();
});

$(".playlistbtn").click(function(){
    $(".albumcover").hide();
    $(".home").hide();
    $(".browse").hide();
    $(".playlist").show();
    $(".bio").hide();
});

$(".biobtn").click(function(){
    $(".albumcover").hide();
    $(".home").hide();
    $(".browse").hide();
    $(".playlist").hide();
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
