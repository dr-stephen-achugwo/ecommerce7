import '@testing-library/jest-dom'
import dotenv from 'dotenv'

// @ts-expect-error
globalThis.IS_REACT_ACT_ENVIRONMENT = true

global.console.warn = (message) => {
  throw message
}

global.console.error = (message) => {
  throw message
}

dotenv.config({ path: '.env' })
