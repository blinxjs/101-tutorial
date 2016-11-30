import config from "./config";
import moduleTemplate from "./counter.html";

function resolveRenderOn() {
    this._.count = 0;
    return this._;
}

function changeCounter(op) {
    switch(op.type) {
        case "increment":
            ++this._.count;
            break;
        case "decrement":
            --this._.count;
            break;
    }
}

export default {
    config,
    template: moduleTemplate,
    resolveRenderOn,
    changeCounter,
    observe_For: ["render"]
}