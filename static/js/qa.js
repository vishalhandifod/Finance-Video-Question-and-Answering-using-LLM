const placeholderText = "Type your question...";
const inputField = document.getElementById("questionInput");
let letterIndex = 0;

// Placeholder animation effect
function animatePlaceholder() {
    if (letterIndex < placeholderText.length) {
        inputField.setAttribute("placeholder", placeholderText.substring(0, letterIndex + 1));
        letterIndex++;
        setTimeout(animatePlaceholder, 150);
    }
}

// Typewriter effect
function typeWriterEffect(element, text, speed = 50, callback) {
    if (!element) return; // Ensure element exists

    element.innerHTML = ""; // Clear previous text
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            scrollToBottom(); // Scroll while typing
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // Execute callback after typing finishes
        }
    }

    type();
}

// Scroll to bottom function
function scrollToBottom() {
    let chatContainer = document.getElementById("chatContainer");
    if (chatContainer) {
        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
        }, 100);
    }
}

// Combined onload function
window.onload = function () {
    animatePlaceholder(); // Start placeholder animation
    scrollToBottom(); // Scroll on page load

    const answerBox = document.getElementById("answerBox");
    if (answerBox && answerBox.innerHTML.trim() !== "") {
        answerBox.classList.add("show");
        document.getElementById("answerBoxContainer").style.display = "block";
    }

    // Apply typewriter effect to the last bot message
    let botMessages = document.querySelectorAll(".bot-message .answer-text");
    if (botMessages.length > 0) {
        let lastMessage = botMessages[botMessages.length - 1];
        let answerText = lastMessage.innerHTML.trim();
        typeWriterEffect(lastMessage, answerText, 50, scrollToBottom);
    }
};
