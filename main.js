//I have no idea what most of this does!!! - NCR

const { app, BrowserWindow, session, Menu } = require('electron')


// Main App Activity: 
app.on('ready', async () => {


    const mainWindow = new BrowserWindow({
        minimizable: true,
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    })

    mainWindow.loadFile('Psalm-app-iframe.html')
    mainWindow.removeMenu()



})



//App menu mac os
const isMac = process.platform === 'darwin'

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      {
        label: 'View Psalm app online',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://sunbible-dev.github.io/Psalm-app/Psalm-app-iframe.html')
        }
      },
      {
        label: 'Join the SunBible discord server',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://discord.gg/t8VryNcGgc')
        }
      },
      {
        label: 'Read SunBible updates and more on medium',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://medium.com/sunbible')
        }
      },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'about' },
      { role: 'quit' }
    ]
  }] : []),
 
  
  // { role: 'viewMenu' }
  ...(isMac ? [{
    label: 'View',
    submenu: [
      { role: 'reload' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  }] : [])
 
  
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)





// Right Click Menu using - "electron-context-menu": "^2.3.0"
const contextMenu = require('electron-context-menu');
contextMenu({
    menu: (actions, props, browserWindow) => [

        { role: 'copy' },
        { role: 'selectAll' },
        { type: 'separator' },
        actions.copyImage(),
        actions.saveImageAs(),
        { type: 'separator' },
        {
          label: 'Join the SunBible discord server',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://discord.gg/t8VryNcGgc')
          }
        },
        {
          label: 'Read SunBible updates and more on medium',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://medium.com/sunbible')
          }
        },
        { type: 'separator' },
        { role: 'minimize'},
        { role: 'togglefullscreen' },
        { role: 'close' }

    ]
});




