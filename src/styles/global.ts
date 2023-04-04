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

  '@media (max-width: 1000px)': {
    html: {
      fontSize: '93.75%',
    },
  },

  '@media (max-width: 720px)': {
    html: {
      fontSize: '87.5%',
    },
  },

  'body, input, textarea, button': {
    // fontFamily: '$default',
    fontWeight: 400,
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
  },
})
