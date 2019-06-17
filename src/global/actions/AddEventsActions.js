import { CHANGE_TEXT } from './types'

export function setText(text) {
  return ({
    type: CHANGE_TEXT,
    payload: text
  })
}
