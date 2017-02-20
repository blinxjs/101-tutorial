import config from "./config";
import moduleTemplate from "./counter.html";

function onRenderComplete() {
    document.querySelector(".dec").addEventListener("click", () => {
        --this.modulePlaceholders.initialCount;
        document.querySelector(".count").innerHTML = this.modulePlaceholders.initialCount;
    });

    document.querySelector(".inc").addEventListener("click", () => {
        ++this.modulePlaceholders.initialCount;
        document.querySelector(".count").innerHTML = this.modulePlaceholders.initialCount;
    });
}

export default {
    config,
    template: moduleTemplate,
    onRenderComplete
}