const COORDS = 'coords';

function handleGeoSuccess(position) {
    console.log(position);
}

function handleGeoError(position) {
    console.log("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null) {
        askForCoords();
    } else {
        //getWeather
    }
}

function init() {
    loadCoords();
}

init();