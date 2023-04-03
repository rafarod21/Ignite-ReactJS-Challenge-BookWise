import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    lineHeight: '$base',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: 400,
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
  },
})
