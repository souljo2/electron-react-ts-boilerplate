# Commands
```
// Build react src only
"build-react": "parcel build src/index.html --no-source-maps"

// Build electron
"build-electron": "electron-builder"

// Build all
"build": "run-s pre-build-react pre-build-electron build-react build-electron"

// Run react
"dev-react": "parcel src/index.html"

// Run electron
"dev-electron": "electron ."

// Run dev
"dev": "concurrently yarn:dev-electron yarn:dev-react"
```