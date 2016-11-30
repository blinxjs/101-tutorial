import config from "./config";
import moduleTemplate from "./counter.html";

function resolveRenderOn() {
    return fetch("https://randomuser.me/api/").then((response)=>{
        return response.json();
    });
}

function onRenderComplete() {

}

export default {
    config,
    template: moduleTemplate,
    resolveRenderOn,
    onRenderComplete
}