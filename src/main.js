import "./style.css";
import app from "./app";
import initRouter from "./route/router";
const BASE_URL = `https://youtube-music.f8team.dev/api`;
import AudioPlayer from "./service/AudioPlayer";

window.addEventListener("DOMContentLoaded", () => {
    AudioPlayer.init();
});

// mọi người khai báo async func để xử lý bất đồng bộ

const render = async () => {
    document.querySelector("#app").innerHTML = await app();
};


const test = async () => {

await render();

await initRouter();
}

test()