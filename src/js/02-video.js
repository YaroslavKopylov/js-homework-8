import Player from "@vimeo/player";
const throttle = require("lodash.throttle");

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

function onLoadTime(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
}

player
    .setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    .then(function (seconds) {
        // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
        switch (error.name) {
            case "RangeError":
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });

player.on("timeupdate", throttle(onLoadTime, 1000));
