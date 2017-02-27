export default {
  enableSmartRender: true,
  modules: [],
  placeholders: {
  },
  domEvents: {
    click: [{
      selectors: ["button"],
      extract: {
        type: "getData#type"
      },
      callback: "updateCount"
    }]
  }
}
