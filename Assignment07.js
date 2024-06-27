function navigatorInfo() {
    var nav = "Browser Name: " + navigator.appName + "\n" +
        "Browser Engine Name: " + navigator.product + "\n" +
        "Browser Version: " + navigator.appVersion + "\n" +
        "Browser User Agent: " + navigator.userAgent + "\n" +
        "Browser Platform: " + navigator.platform + "\n" +
        "Browser Language: " + navigator.language
    alert(nav)
}

function windowInfo() {
    var infoWindow = "Window Inner Height: " + window.innerWidth + "\n" +
        "Window Inner Height: " + window.innerHeight;
    alert(infoWindow)
}

function screenInfo() {
    var infoScreen = "Screen Width: " + screen.width + "\n" +
        "Screen Height: " + screen.height + "\n" +
        "Available Screen Width: " + screen.availWidth + "\n" +
        "Available Screen Height: " + screen.availHeight + "\n" +
        "Screen Color Depth: " + screen.colorDepth + "\n" +
        "Screen Pixel Depth: " + screen.pixelDepth
    alert(infoScreen)
}

function locationInfo() {
    var infoLocation = "Page URL is: " + window.location.href + "\n" +
        "Page domain is: " + window.location.hostname + "\n" +
        "Page path and filename are: " + window.location.pathname + "\n" +
        "Page web protocol is: " + window.location.protocol
    alert(infoLocation)
}

function geolocationInfo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            alert("Latitude: " + position.coords.latitude +
                "\nLongitude: " + position.coords.longitude);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}