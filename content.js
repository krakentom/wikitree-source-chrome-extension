(function() {
    var url = window.location.href;

    if (url.includes("mza.cz/actapublica/matrika")) {
        getBrnoSource();
    } else if (url.includes("matriken.tirol.gv.at")) {
        getTyrolSource();
    } else {
        alert('This page is not supported.');
    }
})();