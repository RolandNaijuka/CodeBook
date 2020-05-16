function outputEval(){
    var cssVal = "<style>\\"+$("#cssPanel").val()+"\\</style>";
    $("iframe").contents().find("html").html($("#htmlPanel").val());
    $("iframe").contents().find("body").prepend(cssVal);
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}


$(".toggleButton").hover(function () {
    $(this).addClass("highlightedButton");
}, function () {
    $(this).removeClass("highlightedButton");
});
$(".toggleButton").click(function () {
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");

    var panelId = $(this).attr("id")+"Panel";
    $("#"+panelId).toggleClass("hidden");
    var numOfActive = 4 - $(".hidden").length;

    $(".panel").width(($("#container").width() / numOfActive) - 10);

    $(".panel").first().css("border-left","1px solid grey")
    $(".panel").last().css("border-right","1px solid grey")
});
$(".panel").height($(window).height() - $("#header").height() - 15);
$(".panel").width(($("#container").width() / 2) - 10);
$(".panel").first().css("border-left","1px solid grey")
$(".panel").last().css("border-right","1px solid grey")

outputEval();

$("textarea").on("change keyup paste", function(){
    outputEval();
});