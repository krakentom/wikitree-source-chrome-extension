function getBrnoSource() {
    try {
        var url = window.location.href;

        var cityNameEl = document.querySelector("#matrika-header > ul:nth-child(1) > li:nth-child(3) > span.font-weight-bolder");
        if (!cityNameEl) {
            alert('Error: City name element not found');
            return;
        }
        var cityName = cityNameEl.textContent;

        var bookNoEl = document.querySelector("#matrika-header > ul:nth-child(1) > li:nth-child(2) > span.font-weight-bolder");
        if (!bookNoEl) {
            alert('Error: Book number element not found');
            return;
        }
        var bookNo = bookNoEl.textContent;

        var birthYearsEl = document.querySelector("#matrika-header > ul:nth-child(2) > li:nth-child(1) > ul > li:nth-child(1) > span");
        var marriageYearsEl = document.querySelector("#matrika-header > ul:nth-child(2) > li:nth-child(1) > ul > li:nth-child(2) > span");
        var deathYearsEl = document.querySelector("#matrika-header > ul:nth-child(2) > li:nth-child(1) > ul > li:nth-child(3) > span");

        if (!birthYearsEl || !marriageYearsEl || !deathYearsEl) {
            alert('Error: Year range elements not found');
            return;
        }

        var birthYears = birthYearsEl.textContent.trim();
        var marriageYears = marriageYearsEl.textContent.trim();
        var deathYears = deathYearsEl.textContent.trim();

        var bookType = null;
        var yearFromTo = null;

        if (birthYears != '-') {
            bookType = 'N';
            yearFromTo = birthYears;
        } else if (marriageYears != '-') {
            bookType = 'O';
            yearFromTo = marriageYears;
        } else if (deathYears != '-') {
            bookType = 'Z';
            yearFromTo = deathYears;
        }

        if (!bookType || !yearFromTo) {
            alert('Error: Could not determine registry type');
            return;
        }

        var pageNoEl = document.querySelector("#input-page");
        if (!pageNoEl) {
            alert('Error: Page number input not found');
            return;
        }
        var pageNo = pageNoEl.value;

        var pageCountEl = document.querySelector("#seadragon-toolbar > div.form-group.mr-1 > div > div.input-group-append > div");
        if (!pageCountEl) {
            alert('Error: Page count element not found');
            return;
        }
        var pageCount = pageCountEl.textContent.replace('z ', '');

        var ref = '<ref>[' + url + ' ' + cityName + ' ' + bookNo + ']. ' + bookType + ': ' + yearFromTo + '. Image ' + pageNo + ' of ' + pageCount + '. Moravský zemský archiv Brno.</ref>';

        navigator.clipboard.writeText(ref).then(function () {
            alert(ref);
        }, function (err) {
            alert('Error copying to clipboard');
        });
    } catch (error) {
        alert('Error during processing: ' + error.message);
    }
}
