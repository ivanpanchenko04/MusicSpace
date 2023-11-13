function isOpen() {
    const closedTime = '18:00';
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let currentTimeFormat = `${hours}:${minutes}`;
    if(currentTimeFormat <= closedTime) {
        return '<----- Наш магазин наразі відчинено. Чекаємо вас:)';
    } else return '<----- Наш магазин наразі зачинено. Чекаємо вас завтра:)';
}

let status = isOpen();
document.getElementById('status').textContent = status;