function resolveRenderOn() {
    console.log("resolveRenderOn called");
}

function render() {
    console.log("render called");
}

function onRenderComplete() {
    console.log("onRenderComplete called");
}

export default {
    resolveRenderOn,
    render,
    onRenderComplete
}