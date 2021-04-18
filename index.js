function fn1() {
    console.log("This is tutorial 54");
    const alarmSubmit = document.getElementById('alarmSubmit');
    const alarmPause = document.getElementById('alarmPause');

    // Add an event listener to the submit button
    alarmSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        const date = document.getElementById('alarmDate');
        const alarm = document.getElementById('alarmTime');
        const label = document.getElementById('alarmDanger');

        alarmDate = new Date(date.value + " " + alarm.value);
        console.log(`Setting Alarm for ${alarmDate}...`);
        now = new Date();
        let timeToAlarm = alarmDate - now;
        console.log(timeToAlarm);
        if (timeToAlarm >= 0) {
            alarm.classList.remove('is-invalid');
            date.classList.remove('is-invalid')
            alarm.classList.add('is-valid');
            date.classList.add('is-valid');
            setTimeout(() => {
                alarmPause.style.visibility = "visible";
                console.log("Ringing now")
                ringBell();
            }, timeToAlarm);
        } else if (timeToAlarm < 0) {
            alarm.classList.remove('is-valid');
            date.classList.remove('is-valid');
            alarm.classList.add('is-invalid');
            date.classList.add('is-invalid');
            label.innerText = "Sorry this time has already passed"
        } else {
            alarm.classList.remove('is-valid');
            date.classList.remove('is-valid');
            alarm.classList.add('is-invalid');
            date.classList.add('is-invalid')
            label.innerText = "Please enter a valid date and enter the time in hh:mm:ss format else we cannot set the alarm"
        }
    });
    alarmPause.addEventListener('click', pauseBell);
    var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

    // function to play the alarm ring tone
    function ringBell() {
        audio.play();
    }

    function pauseBell(e) {
        e.preventDefault();
        audio.pause();
    }
    // This function will run whenever alarm is set from the UI

}