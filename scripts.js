// Requirement 2: Form validation (contact.html)
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    } else {
        return true;
    }
}

// Requirement 3: Show or hide a project description (projects.html)
function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    var currentDisplay = window.getComputedStyle(description).display;

    if (currentDisplay === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

// Requirement 4: Change the blockquote style on mouseover and restore it on mouseout (cv.html)
var quote = document.querySelector("blockquote");

if (quote) {
    quote.addEventListener("mouseover", function () {
        quote.style.backgroundColor = "#ffe4f3";
        quote.style.fontStyle = "italic";
    });

    quote.addEventListener("mouseout", function () {
        quote.style.backgroundColor = "";
        quote.style.fontStyle = "";
    });
}

// Requirement 5: Add the load date/time to the footer (index.html)
function addLoadedMessage() {
    var now = new Date();
    var paragraph = document.createElement("p");
    var message = document.createTextNode("Page loaded on: " + now.toString());

    paragraph.appendChild(message);
    document.querySelector("footer").appendChild(paragraph);
}
