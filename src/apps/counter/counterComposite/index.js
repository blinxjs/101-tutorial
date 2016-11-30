import moduleTemplate from "./counter.html";

function resolveRenderOn() {

}

function render() {
    document.querySelector(this.getModuleContainer()).innerHTML = moduleTemplate(this.getInstanceConfig());
}

function onRenderComplete() {

}

export default {
    resolveRenderOn,
    render,
    onRenderComplete
}