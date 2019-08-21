'use strict'

import { app, protocol, BrowserWindow, globalShortcut, ipcMain, Menu, Tray } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 320,
    useContentSize: true,
    transparent: false,
    frame: false,
    resizable: false,
    'skip-taskbar': true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })

  win.on('minimize', () => {
    win.hide()
    putIconOnTray()
  })
}

let trayIcon
function putIconOnTray () {
  const iconPath = require('path').join(__static, 'icon.ico')
  trayIcon = new Tray(iconPath)
  const menu = Menu.buildFromTemplate([
    {
      label: 'è¡¨ç¤º',
      click () {
        popupApplication()
      }
    },
    {
      label: 'çµ‚äº†',
      click () {
        win.close()
      }
    }
  ])
  trayIcon.setContextMenu(menu)
}

function popupApplication () {
  win.show()
  win.focus()
  if (trayIcon) {
    trayIcon.destroy()
  }
}

function registerShortcut () {
  globalShortcut.register('Super+Enter', () => {
    popupApplication()
  })
}

function unregisterShortcut () {
  globalShortcut.unregisterAll()
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    if (trayIcon) {
      trayIcon.destroy()
    }
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools()
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  registerShortcut()
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

app.on('will-quit', () => {
  unregisterShortcut()
})

ipcMain.on('put-in-tray', (event) => {
  win.hide()
  putIconOnTray()
})