const time = () => {
  let date = new Date();
  let us = document.getElementById("Us");
  let uk = document.getElementById("Uk");
  let india = document.getElementById("india");
  let china = document.getElementById("china");

  us.innerHTML = date
    .toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    .split(", ")[1];
  uk.innerHTML = date
    .toLocaleString("en-US", { timeZone: "Asia/Karachi" })
    .split(", ")[1];
  india.innerHTML = date
    .toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    .split(", ")[1];
  china.innerHTML = date
    .toLocaleString("en-US", { timeZone: "Asia/Urumqi" })
    .split(", ")[1];
  Vutan.innerHTML = date
    .toLocaleString("en-US", { timeZone: "Asia/Urumqi" })
    .split(", ")[1];
  Jordan.innerHTML = date
    .toLocaleString("en-US", { timeZone: "Asia/Amman" })
    .split(", ")[1];
  turkey.innerHTML = date
   .toLocaleString("en-US", { timeZone: "Europe/Istanbul" })
   .split(", ")[1];
  };

setInterval(() => {
  time();
}, 1000);
