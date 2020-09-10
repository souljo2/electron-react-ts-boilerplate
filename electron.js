const { app, BrowserWindow } = require( 'electron' )
const path = require( 'path' )

let mainWindow

function createWindow () {
  const isDev = process.argv[ 2 ] === '--dev'

  mainWindow = new BrowserWindow( {
    center: true,
    resizable: true,
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