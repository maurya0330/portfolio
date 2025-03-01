//code for buttons//
function viewProject() {
    alert("You clicked on 'View My Project'. Here, you can showcase your work!");
}

function toggleText(fullTextId, shortTextId) {
    const fullText = document.getElementById(fullTextId);
    const shortText = document.getElementById(shortTextId);
    const button = document.querySelector(`button[aria-controls="${fullTextId}"]`);

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        button.setAttribute("aria-expanded", "true");
        button.textContent = "Show Less";
    } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
        button.setAttribute("aria-expanded", "false");
        button.textContent = "Learn More";
    }
}
// submit//
