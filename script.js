function isOpen() {
    const closedTime = '18:00';
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let currentTimeFormat = `${hours}:${minutes}`;
    if (currentTimeFormat <= closedTime) {
        return 'Наш магазин наразі відчинено. Чекаємо вас:)';
    } else return 'Наш магазин наразі зачинено. Чекаємо вас завтра:)';
}
let status = isOpen();
document.getElementById('status').textContent = status;

$(document).ready(function () {
    $(".dropdownMenu").hide();
    $(".dropdownMenu").menu();
    $(".dropdownLink").mouseenter(function () {
        $(".dropdownMenu").show();
    });
    $(".dropdownMenu").mouseenter(function () {
        $(this).show();
    }).mouseleave(function () {
        $(this).hide();
    });
});

$(document).ready(function () {
    $(".dialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        width: 400,
        open: function() {
            $(".ui-dialog-titlebar, .ui-dialog-buttonpane").remove();
        }
    });
    $(".openDialog").on("click", function () {
        $(".dialog").dialog("open");
    });
    $(".send, .close").on("click", function () {
        $(".dialog").dialog("close");
    });
});
