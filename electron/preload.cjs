const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  toggleAlwaysOnTop: (shouldBeOnTop) =>
    ipcRenderer.invoke("always-on-top:set", !!shouldBeOnTop),

  getAlwaysOnTop: () => ipcRenderer.invoke("always-on-top:get"),
});
