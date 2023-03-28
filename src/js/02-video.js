import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const CURRENT_VIDEO_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _throttle(onPlay, 1000));


function onPlay({seconds}) {
    localStorage.setItem(CURRENT_VIDEO_TIME, seconds);
}

setCurrentTime();

function setCurrentTime() {
    if(!localStorage.getItem(CURRENT_VIDEO_TIME)) {
        return;
    }

    player.setCurrentTime(localStorage.getItem(CURRENT_VIDEO_TIME));
}
