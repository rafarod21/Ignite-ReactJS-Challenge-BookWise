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

  '@bplg': {
    html: {
      fontSize: '93.75%',
    },
  },

  '@bpmd': {
    html: {
      fontSize: '87.5%',
    },
  },

  '@bpsm': {
    html: {
      fontSize: '81.25%',
    },
  },

  'body, input, textarea, button': {
    // fontFamily: '$default',
    fontWeight: 400,
  },

  'a, button': {
    all: 'unset',
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
})
