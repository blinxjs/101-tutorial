import Blinx from "Blinx";

import CounterCompositeModule from "./src/apps/counter/counterComposite/index";

import Logger from "blinx-extensions/lib/logger-g-ext";
import EventBind from "blinx-extensions/lib/bind-ext";
import SmartRender from "blinx-extensions/lib/smart-render";

Blinx.use(Logger);
Blinx.use(EventBind);
Blinx.use(SmartRender);

Blinx.createInstance({
    "moduleName": "CounterCompositeModule",
    "module": CounterCompositeModule,
    "instanceConfig": {
        "container": "#app-container",
        "placeholders": {
            initialCount: 10,
            greeting: "Hola"
        }
    }
});

// Blinx.destroyInstance();