// Reveal time pinned to Montréal time (Eastern Standard Time, UTC-05:00)
const REVEAL_AT = new Date(Date.now() + 10 * 60 * 1000).toISOString();

const revealAtMs = new Date(REVEAL_AT).getTime();
const img = document.getElementById("revealImg");
const timer = document.getElementById("timer");
const status = document.getElementById("status");
const revealTimeText = document.getElementById("revealTimeText");

revealTimeText.textContent = `Reveals at (Montréal time): ${new Date(REVEAL_AT).toLocaleString()}`;

function pad(n) { return String(n).padStart(2, "0"); }

function tick() {
  const now = Date.now();
  const remaining = revealAtMs - now;

  if (remaining <= 0) {
    timer.textContent = "Unlocked";
    status.textContent = "The image is now available.";
    img.src = "Reveal-clear.jpeg";
    img.classList.remove("blurred");
    img.classList.add("revealed");
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timer.textContent = `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  setTimeout(tick, 250);
}

tick();
