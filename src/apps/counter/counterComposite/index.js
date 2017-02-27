import config from "./config";
import moduleTemplate from "./counter.html";

function resolveRenderOn(){
    this._.initialCount = this.modulePlaceholders.initialCount;
}

function updateCount(op) {
  if(op.type === "+"){
    ++this._.initialCount;
  } else {
    --this._.initialCount;
  }
}

export default {
    resolveRenderOn,
    config,
    template: moduleTemplate,
    updateCount,
    observe_For: ["render"]
}
