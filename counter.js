const startDate = new Date("2022-08-15T00:00:00");

function update() {
  const now = new Date();
  const diff = now - startDate;

  // Total seconds
  const totalSeconds = Math.floor(diff / 1000);

  // Years
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Hours, minutes, seconds from remaining ms
  const remainMs = diff - (new Date(startDate.getFullYear() + years, startDate.getMonth() + months, startDate.getDate() + days) - startDate);
  const hours   = Math.floor(remainMs / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(remainMs / (1000 * 60)) % 60;
  const seconds = Math.floor(remainMs / 1000) % 60;

  document.getElementById("years").textContent   = years;
  document.getElementById("months").textContent  = months;
  document.getElementById("days").textContent    = days;
  document.getElementById("hours").textContent   = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

update();
setInterval(update, 1000);
