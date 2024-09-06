export default function timeElapse(together: Date) {
    const current = new Date();
    const seconds = Math.floor((current.getTime() - together.getTime()) / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const timeString = `${days} days ${hours < 10 ? "0" + hours : hours} hours ${minutes < 10 ? "0" + minutes : minutes} minutes ${secs < 10 ? "0" + secs : secs} seconds`;

    const elapseClock = document.getElementById("elapseClock");
    if (elapseClock) {
        elapseClock.innerHTML = timeString;
    }
}
