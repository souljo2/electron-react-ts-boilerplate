// Polyfill
import 'babel-polyfill'
import 'whatwg-fetch'

async function renderMain() {
  const React = await import('react')
  const { render } = await import('react-dom')
  const { App } = await import('./App')

  render(<App />, document.getElementById('root'))
}

renderMain()
