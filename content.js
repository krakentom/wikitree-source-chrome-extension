var url = window.location.href;
var cityName = document.querySelector("#matrika-header > ul:nth-child(1) > li:nth-child(3) > span.font-weight-bolder").innerHTML;
var bookNo = document.querySelector("#matrika-header > ul:nth-child(1) > li:nth-child(2) > span.font-weight-bolder").innerHTML;

var birthYears = document.querySelector("#matrika-header > ul:nth-child(2) > li:nth-child(1) > ul > li:nth-child(1) > span").innerHTML.trim();
var marriageYears = document.querySelector("#matrika-header > ul:nth-child(2) > li:nth-child(1) > ul > li:nth-child(2) > span").innerHTML.trim();
var deathYears = document.querySelector("#matrika-header > ul:nth-child(2) > li:nth-child(1) > ul > li:nth-child(3) > span").innerHTML.trim();

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

var pageNo = document.querySelector("#input-page").value;
var pageCount = document.querySelector("#seadragon-toolbar > div.form-group.mr-1 > div > div.input-group-append > div").innerHTML.replace('z ', '');

var ref = '<ref>[' + url + ' ' + cityName + ' ' + bookNo + ']. ' + bookType + ': ' + yearFromTo + '. Image ' + pageNo + ' of ' + pageCount + '. Moravský zemský archiv Brno.</ref>';

navigator.clipboard.writeText(ref).then(function () {
    alert(ref);
}, function (err) {
    alert('error');
});