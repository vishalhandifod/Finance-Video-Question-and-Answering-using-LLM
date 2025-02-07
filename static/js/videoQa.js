const placeholderText = "Type your question here...";
const inputField = document.getElementById("questionInput");

let letterIndex = 0;

function animatePlaceholder() {
    if (letterIndex < placeholderText.length) {
        inputField.placeholder += placeholderText[letterIndex];
        letterIndex++;
        setTimeout(animatePlaceholder, 150);
    }
    animatePlaceholder()
}
function scrollToBottom() {
    let chatContainer = document.getElementById("chatContainer");
    if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

function typeWriterEffect(element, text, speed = 50, callback) {
    if (!element) return; // Check if the element exists

    element.innerHTML = ""; // Clear previous content
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            scrollToBottom(); // Scroll as text is typed
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // Run callback after typing is complete
        }
    }

    type();
}

window.onload = function () {
    scrollToBottom();

    const answerBox = document.getElementById("answerBox");
    if (answerBox && answerBox.innerHTML.trim() !== "") {
        answerBox.classList.add("show");
        document.getElementById("answerBoxContainer").style.display = "block";
    }

    // Find the last bot message
    let botMessages = document.querySelectorAll(".bot-message .answer-text");
    if (botMessages.length > 0) {
        let lastMessage = botMessages[botMessages.length - 1];
        let answerText = lastMessage.innerHTML.trim(); // Get the answer text

        typeWriterEffect(lastMessage, answerText, 50, scrollToBottom); // Apply typewriter effect
    }
};
