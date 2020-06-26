$(document).ready(function () {
    $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass("btn-open").toggleClass("btn-close");
    });

    $(".menu .service-lvl a").on("click", function () {
        $(this).parent().parent().toggleClass("move");
    });

    $(".menu .service-lvl .sub .return-lvl a").on("click", function () {
        $(this).parent().parent().parent().parent().removeClass("move");
    });
});
