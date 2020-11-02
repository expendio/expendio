import { getShade, changeColorLight } from 'helpers';
import { StartingTheme } from './themes';

const { BRAND, ACCENT, DARK, FONT, BACKGROUND, SUCCESS, ERROR, ...rest } = StartingTheme;

const Colors = {
  BRAND,
  BRAND_DARK: changeColorLight(BRAND, 0.4),
  BRAND_LIGHT: changeColorLight(BRAND, 0.95),
  BRAND_SHADE: getShade(BRAND, 0.1),
  ACCENT,
  ACCENT_DARK: changeColorLight(ACCENT, 0.25),
  ACCENT_SHADE: getShade(ACCENT),
  DARK,
  DARK_DARK: changeColorLight(DARK, 0.25),
  DARK_SHADE: getShade(DARK),
  WHITE: BACKGROUND.LIGHT,
  WHITE_DARK: BACKGROUND.LIGHT,
  WHITE_SHADE: getShade(BACKGROUND.LIGHT, 0.05),
  FONT,
  BACKGROUND: {
    ...BACKGROUND,
    SHADE: getShade(BACKGROUND.LIGHT, 0.05),
  },
  GRAY: '#6b6d76',
  GRAY_DARK: '#4a4b52',
  GRAY_SHADE: getShade('#6b6d76'),
  LIGHT_GRAY: '#F9F9F9',
  MEDIUM_GRAY: '#F5F5F5',
  DARK_GRAY: '#AFAFAF',
  SUCCESS,
  SUCCESS_DARK: '#118e6f',
  SUCCESS_SHADE: getShade('#15aa85'),
  ERROR,
  ERROR_DARK: '#ba2627',
  ERROR_SHADE: getShade('#dc2e2f'),
  ...rest,
};

export default Colors;
