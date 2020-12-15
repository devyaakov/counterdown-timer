import './style.scss';

(function () {
    'use stric';
    let fecha = "2020-12-24 00:00:00";
    let tiempos = [];

    function RunAnimation(time, name){

        console.log(name);
    
        document.querySelector(`${name} .card .card-face-back .time`).innerHTML = time;

        document.querySelector(`${name} .card`).addEventListener('transitionend', () => {
            document.querySelector(`${name} .card .card-face-front .time`).innerHTML = time;
            document.querySelector(`${name} .card`).classList.remove('flipped');
        }, { once: true });

        document.querySelector(`${name} .card`).classList.add('flipped');
    }

    function CalculateDate() {
        let date1 = new Date(fecha)
        let date2 = new Date();
        let result = new Date(date1 - date2);

        const chronometer = {
            d: result.getDate(),
            h: result.getHours(),
            m: result.getMinutes(),
            s: result.getSeconds()
        }

        chronometer.d = chronometer.d < 10 ? `0${chronometer.d}` : `${chronometer.d}`;
        chronometer.h = chronometer.h < 10 ? `0${chronometer.h}` : `${chronometer.h}`;
        chronometer.m = chronometer.m < 10 ? `0${chronometer.m}` : `${chronometer.m}`;
        chronometer.s = chronometer.s < 10 ? `0${chronometer.s}` : `${chronometer.s}`;

        let next = (parseInt(chronometer.s) - 1);
        next = next < 0 ? 59 : next;
        next = next < 10 ? `0${next}` : `${next}`;
        
        tiempos[0] = chronometer.s;
        tiempos[1] = next;
        
        document.querySelector(".timer-card-d .card .card-face-front .time").innerHTML = chronometer.d;
        document.querySelector(".timer-card-h .card .card-face-front .time").innerHTML = chronometer.h;
        document.querySelector(".timer-card-m .card .card-face-front .time").innerHTML = chronometer.m;
        document.querySelector(".timer-card-s .card .card-face-front .time").innerHTML = chronometer.s;

        setTimeout(() => CalculateDate(), 1000);
    }

    (function runClock(){
        CalculateDate();
    })();
})();