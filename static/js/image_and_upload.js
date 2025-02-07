function showForm(type) {
    const container = document.getElementById("container");
    const urlForm = document.getElementById("urlForm");
    const fileForm = document.getElementById("fileForm");

    // Show the appropriate form
    if (type === "url") {
      urlForm.classList.remove("d-none");
      fileForm.classList.add("d-none");
      // Do not change container background color
    } else if (type === "file") {
      fileForm.classList.remove("d-none");
      urlForm.classList.add("d-none");
      // Do not change container background color
    }

    // Reset button colors
    document.getElementById("showUrlForm").classList.remove("btn-active");
    document.getElementById("showFileForm").classList.remove("btn-active");

    // Add active color to the clicked button
    if (type === "url") {
      document.getElementById("showUrlForm").classList.add("btn-active");
    } else if (type === "file") {
      document.getElementById("showFileForm").classList.add("btn-active");
    }
  }

  // Placeholder typing effect
  const placeholderWords = [
    "Enter YouTube URL...",
    "Paste the link here...",
    "Submit your video URL...",
  ];
  const inputElement = document.getElementById("youtubeInput");
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = "";

  function typePlaceholder() {
    if (charIndex < placeholderWords[wordIndex].length) {
      currentWord += placeholderWords[wordIndex][charIndex];
      inputElement.placeholder = currentWord;
      charIndex++;
      setTimeout(typePlaceholder, 100); // Adjust typing speed
    } else {
      setTimeout(() => {
        charIndex = 0;
        currentWord = "";
        wordIndex = (wordIndex + 1) % placeholderWords.length;
        typePlaceholder();
      }, 2000); // Pause before next word
    }
  }

  // Start the typing effect on page load
  document.addEventListener("DOMContentLoaded", () => {
    typePlaceholder();
  });