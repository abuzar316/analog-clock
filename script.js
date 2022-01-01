(function(){
    var time = new Date();
    var hr = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30;
    var min = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6;
    var sec = time.getSeconds() / 60 * 360 ;

    animation = [ 
        "@keyframes sec-hand{from{transform: rotate(" + sec +"deg);}to{transform: rotate(" + (sec + 360) + "deg);}}",
        "@keyframes min-hand{from{transform: rotate(" + min +"deg);}to{transform: rotate(" + (min + 360) + "deg);}}",
        "@keyframes hr-hand{from{transform: rotate(" + hr +"deg);}to{transform: rotate(" + (hr + 360) + "deg);}}"
    ].join("");

    document.querySelector("#clock-animation").innerHTML = animation ;
})();

