var HUD = new Vue({
    el: "#hudElement",
    data: {
        show: false,
        ammo: 0,
        money: "117 000 000",
        mic: false,
        time: "02:01",
        date: "22.04.2021",
        street: "Гора Чиллиад",
        crossingRoad: "Шоссе Сенора",
        playerId : 1000,
		personId: 0,
        online: 1000,
        inVeh: false,
		belt: false,
        engine: false,
        doors: false,
        light: false,
        ilight: -1,
        speed: "150",
        fuel: 100,
        maxfuel: 150,
        gear: 1,
        rpm: 0,
        press: false,
        green: false,
    },
    methods: {
        rpmm: function(rpm) {
            this.rpm = rpm;
        },
        setTime: (time, date) => {
            this.time = time;
            this.date = date;
        }, 
        getSpeed(){
            let num = 504.295 + (this.speed * 100 / 300) * 5;
            return num > 1007.295 ? 1007.295 : num;
        },
        getRpm(){
            let num = 504.295 + (this.rpm * 300 / 300) * 5;
            return num > 675.295 ? 675.295 : num;
        },
    }
})


var lastW = 0;
var lastR = 0;

function updatehud(width, ratio,safezone,offset=0) {

    lastW = width; lastR = ratio;

   let y1 = 316, y2 = 436;

    if(width > 2100) {
        offset += 98;
        
        document.querySelector(".mappings").style['bottom'] = '1px';
    }

    if(width < 1440) {
        offset -= 92;
        y2 = 404;

        document.querySelector(".mappings").style.bottom = '13px';
        document.querySelector(".mappings").style.transform = 'scale(0.75)';
    }

    if(width < 1320) {
        offset -= 38;
        document.querySelector(".mappings").style.bottom = '13px';
        document.querySelector(".mappings").style.transform = 'scale(0.75)';
    }

    const m = (y2 - y1) / (5/4 - 16/9);
    const b = y1 - (m * 16 / 9);

    document.querySelector(".mappings").style.left = `${m * ratio + b + offset}px`;
    
}
