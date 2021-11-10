import ColorUtil from './Color'

// Macros for light/dark theme
const LIGHT_WHITE = '#ffffff';
const LIGHT_ERROR = '#FF5252';
const LIGHT_BLACK = '#000000';
const DARK_WHITE = '#ffffff';
const DARK_BLACK = '#272727';
const DARK_ERROR = '#FF5252';

/**
   * Gets the base color for the input color.
   * See the theme object interface on
   * https://vuetifyjs.com/en/features/theme/#custom-theme-variants
   * @param {String | Object} color hexadecimal/object color
   * @returns {String} base color
   */
function getBaseColor (color) {
  return typeof color === 'object' ? color.base : color;
}

/**
 * Checks luminance of the input color and:
 *   - chooses "light" if color is dark;
 *   - chooses "dark" if color is light
 * @param {String | Object} color hexadecimal/object color
 * @param {String} light hexadecimal color
 * @param {String} dark hexadecimal color
 * @returns {String} contrast color
 */
function contrastColor (color, light, dark) {
  const baseColor = getBaseColor(color);

  return ColorUtil.checkLuminance(baseColor) ? light : dark
}

/**
 * Util class for vuetify theming
 */
const ColorThemeUtil = {
  /**
   * Merges user color theme with the default color theme
   * @param {Object} userTheme user theme from app-config
   * @param {Object} defaultTheme default Wegue theme
   * @returns {Object} merged color theme
   */
  mergeThemes (userTheme, defaultTheme) {
    const { light, dark } = userTheme;

    const merged = {
      light: {},
      dark: {}
    }

    // If light theme is configured with at least the primary color
    if (light && light.primary) {
      // set primary color
      merged.light.primary = light.primary;

      // set secondary to user secondary,
      // otherwise fallback to primary
      merged.light.secondary = light.secondary ? light.secondary : light.primary;

      // set accent to user accent,
      // otherwise fallback to the light theme white
      merged.light.accent = light.accent ? light.accent : LIGHT_WHITE;

      // set onprimary to user onprimary,
      // otherwise fallback to a color that contrasts with the primary
      merged.light.onprimary = light.onprimary ? light.onprimary : contrastColor(merged.light.primary, LIGHT_WHITE, LIGHT_BLACK);

      // set onprimary to user onsecondary,
      // otherwise fallback to a color that contrasts with the secondary
      merged.light.onsecondary = light.onsecondary ? light.onsecondary : contrastColor(merged.light.secondary, LIGHT_WHITE, LIGHT_BLACK);

      // set error to user error,
      // otherwise fallback to light theme error
      merged.light.error = light.error ? light.error : LIGHT_ERROR;
    } else {
      // fallback to default ligth theme
      merged.light = defaultTheme.light;
    }

    // If light theme is configured with at least the secondary color
    if (dark && dark.secondary) {
      // set primary to dark theme primary
      merged.dark.primary = DARK_BLACK;

      // set secondary
      merged.dark.secondary = dark.secondary;

      // set accent to user accent,
      // otherwise fallback to secondary
      merged.dark.accent = dark.accent ? dark.accent : dark.secondary;

      // set onprimary to dark theme white
      merged.dark.onprimary = DARK_WHITE;

      // set onsecondary to user onsecondary,
      // otherwise fallback to a color that contrasts with secondary
      merged.dark.onsecondary = dark.onsecondary ? dark.onsecondary : contrastColor(merged.dark.secondary, DARK_WHITE, DARK_BLACK);

      // set error to user error,
      // otherwise fallback to dark theme error
      merged.dark.error = dark.error ? dark.error : DARK_ERROR;
    } else {
      // fallback to default dark theme
      merged.dark = defaultTheme.dark;
    }

    return merged;
  }
}

export default ColorThemeUtil;