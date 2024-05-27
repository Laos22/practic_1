function timer(date) {


    function showTime() {
        const days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds');

        function getTimeDiffirent(endTime) {
            const t = Date.parse(endTime) - new Date();
            if (t <= 0) return {
                total: t,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
    
            const days = Math.floor(t / (1000 * 60 * 60 * 24)),
                  hours = Math.floor(t / (1000 * 60 * 60)) % 24,
                  minutes = Math.floor(t / (1000 * 60 )) % 60,
                  seconds = Math.floor(t / 1000) % 60;
            return {
                total: t,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        };

        function setTime() {
            const time = getTimeDiffirent(date);
            days.innerHTML = getZero(time.days);
            hours.innerHTML = getZero(time.hours);
            minutes.innerHTML = getZero(time.minutes);
            seconds.innerHTML = getZero(time.seconds);
            if (time.total <= 0) clearInterval(setTimer);
        };

        setTime();
        
        
    }
    showTime();

}

export default timer;