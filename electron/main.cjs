const { app, BrowserWindow, ipcMain } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    minHeight: 300,
    minWidth: 325,
    transparent: false,
    frame: false,
    resizable: true,
    thickFrame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // ✅ custom resize for transparent windows (Windows)
  ipcMain.on("resize-window", (_event, dx, dy) => {
    const w = BrowserWindow.getFocusedWindow();
    if (!w) return;

    const [width, height] = w.getSize();
    w.setSize(Math.max(400, width + dx), Math.max(400, height + dy)); // respects your min
  });

  win.loadURL("http://localhost:5173");
});
