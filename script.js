
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const sectionsToObserve = document.querySelectorAll(".hidden");

  sectionsToObserve.forEach((section) => {
    observer.observe(section);
  });
});

function toggleReadMore(button) {
  const content = button.previousElementSibling;
  if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
      content.style.maxHeight = content.scrollHeight + "px";
      button.classList.remove("collapsed");
      button.classList.add("expanded");
  } else {
      content.style.maxHeight = "0";
      button.classList.remove("expanded");
      button.classList.add("collapsed");
  }
}

function downloadFiles() {
  var secondFileLink = document.createElement('a');
  secondFileLink.href = 'matrix.txt';
  secondFileLink.download = 'matrix.txt';
  document.body.appendChild(secondFileLink);
  secondFileLink.click();
  document.body.removeChild(secondFileLink);
}
