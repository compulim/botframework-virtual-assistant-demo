import { HostConfig } from 'adaptivecards';

export default new HostConfig({
  containerStyles: {
    default: {
      backgroundColor: '#00000000',
      foregroundColors: {
        default: {
          default: '#FFFFFFFF',
          subtle: '#EEFFFFFF'
        },
        accent: {
          default: '#FF2E89FC',
          subtle: '#882E89FC'
        },
        attention: {
          default: '#FFCC3300',
          subtle: '#DDCC3300'
        },
        good: {
          default: '#FF54A254',
          subtle: '#DD54A254'
        },
        warning: {
          default: '#FFE69500',
          subtle: '#DDE69500'
        }
      }
    },
    emphasis: {
      backgroundColor: '#08000000',
      foregroundColors: {
        default: {
          default: '#FFFFFFFF',
          subtle: '#EEFFFFFF'
        },
        accent: {
          default: '#FF2E89FC',
          subtle: '#882E89FC'
        },
        attention: {
          default: '#FFCC3300',
          subtle: '#DDCC3300'
        },
        good: {
          default: '#FF54A254',
          subtle: '#DD54A254'
        },
        warning: {
          default: '#FFE69500',
          subtle: '#DDE69500'
        }
      }
    }
  },

  supportsInteractivity: true,
  fontFamily: 'Calibri, \'Helvetica Neue\', Arial, sans-serif',
  imageSizes: {
    small: 40,
    medium: 80,
    large: 160
  },
  actions: {
    actionAlignment: 'stretch',
    actionsOrientation: 'vertical',
    buttonSpacing: 8,
    maxActions: 100,
    showCard: {
      actionMode: 'inline',
      inlineTopMargin: 8
    },
    spacing: 'default'
  },
  adaptiveCard: {
    allowCustomStyle: false
  },
  imageSet: {
    imageSize: 'medium',
    maxImageHeight: 100
  },
  factSet: {
    title: {
      color: 'default',
      size: 'default',
      isSubtle: false,
      weight: 'bolder',
      wrap: true,
      maxWidth: 150
    },
    value: {
      color: 'default',
      size: 'default',
      isSubtle: false,
      weight: 'default',
      wrap: true
    },
    spacing: 8
  }
})
