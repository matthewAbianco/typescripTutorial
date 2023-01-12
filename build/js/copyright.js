"use strict";
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// 1st variation
let year;
year = document.getElementById("year");
let thisYear;
thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
