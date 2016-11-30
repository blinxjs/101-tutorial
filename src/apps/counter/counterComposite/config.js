export default {
    modules: [],
    placeholders: {
        greeting: "Hi"
    },
    enableSmartRender: true,
    domEvents: {
        "click": [{
            selectors: [".counter-changer"],
            callback: "changeCounter",
            extract: {
                type: "getData#type"
            }
        }]
    }
}