import Blinx from "Blinx";

import eventBind from "blinx-extensions/lib/bind-ext";
import smartRender from "blinx-extensions/lib/smart-render";
import observer from "blinx-extensions/lib/observer";

Blinx.use(eventBind);
Blinx.use(smartRender);
Blinx.use(observer);

import CounterCompositeModule from "./src/apps/counter/counterComposite/index";

Blinx.createInstance({
    "moduleName": "CounterCompositeModule",
    "module": CounterCompositeModule,
    "instanceConfig": {
        "container": "#app-container",
        "placeholders": {
            initialCount: 10
        }
    }
});
