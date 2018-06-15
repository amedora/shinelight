'use strict'

import { app, BrowserWindow, ipcMain, Menu, Tray } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 320,
    useContentSize: true,
    width: 600,
    transparent: false,
    frame: false,
    resizable: false,
    'skip-taskbar': true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('minimize', () => {
    mainWindow.hide()
    putIconOnTray()
  })

  mainWindow.minimize()
}

let trayIcon
function putIconOnTray () {
  const iconPath = require('path').join(__static, 'icon.ico')
  trayIcon = new Tray(iconPath)
  const menu = Menu.buildFromTemplate([
    {
      label: '表示',
      click () {
        popupApplication()
      }
    },
    {
      label: '終了',
      click () {
        mainWindow.close()
      }
    }
  ])
  trayIcon.setContextMenu(menu)
}

function popupApplication () {
  mainWindow.show()
  mainWindow.focus()
  if (trayIcon) {
    trayIcon.destroy()
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (trayIcon) {
      trayIcon.destroy()
    }
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('put-in-tray', (event) => {
  mainWindow.hide()
  putIconOnTray()
})
