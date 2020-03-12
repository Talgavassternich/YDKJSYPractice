const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    let [h, m] = startTime.split(":");
    m = parseInt(m);
    h = parseInt(h)
    if (h > 7 && h < 17 || h === 7 && m >= 30 || h === 17 && m <= 45) {
        var start = true;
    } else {
        var start = false;
    }
    m += durationMinutes;
    h += m < 60 ? 0 : Math.floor(m / 60);
    m %= 60;
    console.log(`${h}:${m}`);
    if (h > 7 && h < 17 && start || h === 7 && m >= 30 && start || h === 17 && m <= 45 && start) {
        return true;
    }
    return false;
}
console.log(scheduleMeeting("7:00",15));
console.log(scheduleMeeting("07:15",30));
console.log(scheduleMeeting("7:30",30));
console.log(scheduleMeeting("11:30",60));
console.log(scheduleMeeting("17:00",45));
console.log(scheduleMeeting("17:30",30));
console.log(scheduleMeeting("18:00",15));
