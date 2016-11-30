import Blinx from "Blinx";

import CounterCompositeModule from "./src/apps/counter/counterComposite/index";

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