function setupTime() {
  updateTime();
  setInterval(updateTime, 1000);
}

function updateTime() {
  let clock = document.getElementById('time');
  let date = new Date()
  let time = date.getHours() + ':' + date.getMinutes();
  clock.innerHTML = time;
}
