"use strict";
/*

Loads data that should look the same in all subpages

NOTE: Currently, notices are loaded into <p> tags, which will almost certainly 
  mess with images and other non-span tags

*/

const notices = {
  "Nytt notissystem!":
    "Detta är ett nytt notissystem! Genom att använda JavaScript kan man nu definera notiser som kommer dyka upp i alla sidor. Detta gör notisuppdateringar mycket lättare.",
  "Hur notissytemet fungerar":
    "För att lägga till och ta bort notiser behöver man bara ändra i loadNotices.js. Det tar max typ en minut, om man har en stor notis.",
  "Systemets gränser":
    "Man kan lägga in text, bilder, <a href='404.html'>länkar</a>, och typ allt annat i en notis. Dock behöver den vara någorlunda liten för att passa i designen, och den måste alltid ha en titel som set ser ut just nu.",
};

const navigationOptions = [
  ["Hem", "index.html"],
  ["Navigera", "navigate.html"],
  ["Kontakt", "contact.html"],
];

const sideBarDiv = document.getElementById("side-bar-div");

function createNotice(title, content) {
  // Create a new HTML div with the right classes
  const noticeDiv = document.createElement("div");
  noticeDiv.classList =
    "bordered-primary padded rounded primary-highlight margin-y";
  // Add the notice content and title
  noticeDiv.innerHTML = `<h2>${title}</h2>
<p>${content}</p>`;
  sideBarDiv.appendChild(noticeDiv);
}

// Add one notice if on phone, and all of them if on computer
if (window.innerWidth < 800) {
  const [title, content] = Object.entries(notices)[0];
  createNotice(title, content);
} else {
  for (const [title, content] of Object.entries(notices)) {
    createNotice(title, content);
  }
}

// Add nav options
for (const parent of document.getElementsByClassName("navigation-options")) {
  for (const [name, url] of navigationOptions) {
    const link = document.createElement("a");
    link.innerText = name;
    link.href = url;
    link.classList = "navigation-option inverted-text-color";

    parent.appendChild(link);
  }
}

// Add a little icon to external links
for (const el of document.getElementsByTagName("a")) {
  if (new URL(el.href).origin !== location.origin) el.innerText += "☍";
}
