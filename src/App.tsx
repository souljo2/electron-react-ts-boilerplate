import React from 'react'

export function App(): JSX.Element {
  const appStyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    background: '#000',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' center',
  }
  return (
    <div style={appStyle}>
      <h1>Hello world !! :)</h1>
    </div>
  )
}

export default App
