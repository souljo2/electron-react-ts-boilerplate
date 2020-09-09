const { app, BrowserWindow } = require( 'electron' )
const isDev = require( 'electron-is-dev' )
const path = require( 'path' )

function createWindow () {
  const mainWindow = new BrowserWindow( {
    // alwaysOnTop: true,
    // fullscreen: true,
    center: true,
    kiosk: !isDev,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  } )

  if ( isDev ) {
    mainWindow.loadURL( 'http://localhost:1234' )
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile( path.join( __dirname, './dist/index.html' ) )
  }

  // Emitted when the window is closed.
  mainWindow.on( 'closed', () => mainWindow = undefined )
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on( 'ready', createWindow )

// Quit when all windows are closed.
app.on( 'window-all-closed', () => app.quit() )