import '../styles/fonts.css'

export default {
  colors: {
    background: '#ffffff',
    text: '#0E0718',
    primary: '#30174F',
    secondary: '#F1EBF9',
    tertiary: '#F2F2F3',
    highlight: '#7136BA',
    yellow: '#FFD13A',
    fadedPurple: '#67557C',
    highlight25: 'rgba(113, 54, 186, 0.25)',
    highlight05: 'rgba(113, 54, 186, 0.05)',
    highlight05: 'rgba(113, 54, 186, 0.01)',
    white25: 'rgba(255, 255, 255, 0.25)',
    white50: 'rgba(255, 255, 255, 0.50)',
    accent001: '#2F9E44',
  },
  gradients: {
    primary: 'linear-gradient(140.98deg, rgba(113, 54, 186, 0.5) 17.15%, rgba(14, 7, 24, 0.5) 59.18%, rgba(110, 38, 255, 0.5) 117.37%), radial-gradient(106.5% 85.16% at 73.56% 25.55%, rgba(113, 54, 186, 0.5) 6.86%, rgba(48, 23, 79, 0.5) 58.17%, rgba(14, 7, 24, 0.5) 96.14%)',
    rainbow: 'radial-gradient(77.25% 247.56% at 67.85% 41.28%, #FFD13A 0%, rgba(0, 42, 115, 0.29) 100%), linear-gradient(140.8deg, rgba(48, 27, 79, 0.89) 32.5%, rgba(185, 30, 35, 0.89) 66.74%), linear-gradient(93.61deg, #301B4F 0.54%, #30264E 27.33%, #B91E23 47.97%, rgba(228, 141, 49, 0.79) 61.11%, rgba(255, 209, 58, 0.72) 70.59%, rgba(208, 172, 91, 0.81) 78.62%, #301B4F 96.86%)',
    rainbowFade: 'radial-gradient(77.25% 247.56% at 67.85% 41.28%, #FFD13A 0%, rgba(0, 42, 115, 0.29) 100%), linear-gradient(140.8deg, rgba(48, 27, 79, 0.89) 32.5%, rgba(185, 30, 35, 0.89) 66.74%), linear-gradient(93.61deg, #301B4F 0.54%, #30264E 27.33%, #B91E23 47.97%, rgba(228, 141, 49, 0.79) 61.11%, rgba(255, 209, 58, 0.72) 70.59%, rgba(208, 172, 91, 0.81) 78.62%, #301B4F 96.86%)'
  },
  blend: {
    rainbow: 'soft-light, screen, normal'
  },
  shadows: {
    button: 'box-shadow: 0px 0px 5px rgba(113, 54, 186, 0.7);'
  },
  fonts: {
    body:
      'Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    bodyBold:
      'Quicksand-Bold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    header:
      'Sonder-Sans',
    headerBold: 
      'Sonder-Sans-Bold',
    headerBlack: 
      'Sonder-Sans-Black',
  },
  sizes: {
    maxWidth: '1260px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}
