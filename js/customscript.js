
theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
function themeChange() {
    theme = theme == 'dark' ? 'light' : 'dark';
    if (theme == 'dark') {
        $("body").removeClass("text-black bg-light");
        $("body").addClass("text-white bg-dark");
        $("a").css("color", "#fff");
        $("#modetext").html("&#xe60f;");
    } else {
        $("body").removeClass("text-white bg-dark");
        $("body").addClass("text-black bg-light");
        $("a").css("color", "#000");
        $("#modetext").html("&#xe6c0;");
    }
}
themeChange();

$("a").hover(
    function () {
        $(this).css("color", "#F0C9CF");
    },
    function () {
        if (theme == 'dark') {
            $(this).css("color", "#fff");
        } else {
            $(this).css("color", "#000");
        }
    }
);

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(
    function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    }
)