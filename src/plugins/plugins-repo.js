/**
 * Lists of all plugins currently available.
 * Should be replaced with a remote JSON eventually or an API.
 *
 **/

export default {
  NumberRange: {
    core: true,
    preview:
      "data:image/png;base64,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",
    initPath: "number-range/src/init.js",
    readableName: "Serial Number Range Management",
    pluginName: "NumberRange",
    description: `
                The Serial Number Range Management plugin offers users the
                ability to interact with SerialBox, the backend solution for
                your serial number range management requirements.

                Among other functions, this plugin offers the ability to create
                pools and serial number ranges as well as allocate numbers on
                the fly from the QU4RTET interface.
            `
  },
  Capture: {
    core: true,
    initPath: "capture/src/init.js",
    preview: "",
    readableName: "Capture",
    pluginName: "Capture",
    description: `
              The Capture Plugin.
            `
  }
};
