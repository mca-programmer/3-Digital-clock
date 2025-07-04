function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // initial call

let prevTime = '';

function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();

  const clock = document.getElementById('digitalClock');
  if (clock.textContent !== timeStr) {
    clock.style.transform = 'scale(1.1)';
    setTimeout(() => clock.style.transform = 'scale(1)', 100);
  }

  clock.textContent = timeStr;
}
