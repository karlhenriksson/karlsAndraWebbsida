"use strict";
/*

Loads all the notifications from an object to the page, to allow for changing
notifications in one place

NOTE: Currently, notices are put inside of <p> tags. This might mess with images or icons if they are present

*/

const notices = {
  "Nytt notissystem!": "Detta är ett nytt notissystem! Genom att använda JavaScript kan man nu definera notiser som kommer dyka upp i alla sidor. Detta gör notisuppdateringar mycket lättare.",
  "Hur notissytemet fungerar": "För att lägga till och ta bort notiser behöver man bara ändra i loadNotices.js. Det tar max fem minuter, om man har en stor notis.",
  "Systemets gränser": "Man kan lägga in text, bilder, <a href='404.html'>länkar</a>, och typ allt annat i en notis. Dock behöver den vara någorlunda liten för att passa i designen, och den måste alltid ha en titel som set ser ut just nu.",
};

const sideBarDiv = document.getElementById("side-bar-div");

// For all notices...
for(let [title, content] of Object.entries(notices)) {
  // Create a new HTML div with the right classes
  const noticeDiv = document.createElement("div");
  noticeDiv.classList = "bordered-primary padded rounded primary-highlight margin-y";
  // Add the notice content and title
  noticeDiv.innerHTML = `<h2>${title}</h2>
  <p>${content}</p>`;
  sideBarDiv.appendChild(noticeDiv);
}