/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const SettingsIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.2894 2.53999C22.5162 1.07824 23.7747 0 25.2539 0H30.7461C32.2253 0 33.4838 1.07824 33.7106 2.53999L34.4615 7.37916C35.6895 7.77033 36.869 8.27001 37.9889 8.86693L41.9649 5.95905C43.1589 5.08583 44.8112 5.21326 45.8572 6.25925L49.7407 10.1428C50.7867 11.1888 50.9142 12.8411 50.0409 14.035L47.0326 18.1485C47.5668 19.2171 48.0137 20.3369 48.3639 21.4986L53.46 22.2894C54.9218 22.5162 56 23.7747 56 25.2539V30.7461C56 32.2253 54.9218 33.4838 53.46 33.7106L48.1238 34.5386C47.7656 35.5846 47.3282 36.5938 46.8187 37.559L50.041 41.965C50.9142 43.1589 50.7867 44.8112 49.7408 45.8572L45.8572 49.7408C44.8112 50.7867 43.1589 50.9142 41.9649 50.0409L37.4196 46.7167C36.5072 47.1682 35.5579 47.5561 34.5773 47.8747L33.7106 53.46C33.4838 54.9218 32.2253 56 30.7461 56H25.2539C23.7747 56 22.5162 54.9218 22.2894 53.46L21.4227 47.8747C20.4421 47.5561 19.4927 47.1682 18.5804 46.7167L14.035 50.0409C12.841 50.9142 11.1888 50.7867 10.1428 49.7408L6.25925 45.8572C5.21326 44.8112 5.08582 43.1589 5.95905 41.965L9.18134 37.5589C8.67181 36.5937 8.23441 35.5846 7.87622 34.5386L2.53998 33.7106C1.07825 33.4838 0 32.2253 0 30.7461V25.2539C0 23.7747 1.07825 22.5162 2.53998 22.2894L7.63611 21.4986C7.9863 20.3369 8.43317 19.2171 8.96741 18.1485L5.95905 14.035C5.08585 12.8411 5.21326 11.1888 6.25925 10.1428L10.1428 6.25924C11.1888 5.21326 12.8411 5.08583 14.0351 5.95905L18.0111 8.86693C19.131 8.27001 20.3105 7.77032 21.5385 7.37915L22.2894 2.53999Z" />
      </mask>
      <path d="M22.2894 2.53999L25.254 3.00001L25.254 2.99997L22.2894 2.53999ZM33.7106 2.53999L30.7461 2.99997L30.7461 3.00001L33.7106 2.53999ZM34.4615 7.37916L31.497 7.83918L31.7817 9.67405L33.551 10.2376L34.4615 7.37916ZM37.9889 8.86693L36.5777 11.5143L38.2397 12.4002L39.7598 11.2884L37.9889 8.86693ZM41.9649 5.95905L40.194 3.53754V3.53754L41.9649 5.95905ZM45.8572 6.25925L47.9785 4.13793L47.9785 4.13792L45.8572 6.25925ZM49.7407 10.1428L47.6194 12.2641L47.6194 12.2641L49.7407 10.1428ZM50.0409 14.035L47.6194 12.2641L47.6194 12.2641L50.0409 14.035ZM47.0326 18.1485L44.6111 16.3775L43.5313 17.854L44.3493 19.4901L47.0326 18.1485ZM48.3639 21.4986L45.4916 22.3645L46.0369 24.1734L47.9039 24.4632L48.3639 21.4986ZM53.46 22.2894L53.92 19.3249H53.92L53.46 22.2894ZM53.46 33.7106L53.92 36.6751H53.92L53.46 33.7106ZM48.1238 34.5386L47.6638 31.5741L45.8728 31.852L45.2856 33.5667L48.1238 34.5386ZM46.8187 37.559L44.1656 36.1585L43.2904 37.8166L44.3972 39.3299L46.8187 37.559ZM50.041 41.965L52.4625 40.194L52.4625 40.194L50.041 41.965ZM49.7408 45.8572L47.6194 43.7359L47.6194 43.7359L49.7408 45.8572ZM45.8572 49.7408L47.9785 51.8621L47.9786 51.8621L45.8572 49.7408ZM41.9649 50.0409L43.7359 47.6194L41.9649 50.0409ZM37.4196 46.7167L39.1905 44.2952L37.7209 43.2204L36.089 44.0279L37.4196 46.7167ZM34.5773 47.8747L33.6502 45.0216L31.8957 45.5917L31.6128 47.4147L34.5773 47.8747ZM33.7106 53.46L30.7461 53L30.7461 53L33.7106 53.46ZM22.2894 53.46L25.254 53L25.2539 53L22.2894 53.46ZM21.4227 47.8747L24.3872 47.4147L24.1044 45.5916L22.3498 45.0216L21.4227 47.8747ZM18.5804 46.7167L19.911 44.0279L18.2791 43.2204L16.8095 44.2952L18.5804 46.7167ZM14.035 50.0409L15.806 52.4625H15.806L14.035 50.0409ZM10.1428 49.7408L8.02144 51.8621L8.02145 51.8621L10.1428 49.7408ZM6.25925 45.8572L8.38057 43.7359L8.38056 43.7359L6.25925 45.8572ZM5.95905 41.965L8.38055 43.7359L8.38056 43.7359L5.95905 41.965ZM9.18134 37.5589L11.6028 39.3299L12.7096 37.8165L11.8344 36.1585L9.18134 37.5589ZM7.87622 34.5386L10.7144 33.5667L10.1272 31.852L8.33623 31.5741L7.87622 34.5386ZM2.53998 33.7106L2.07996 36.6751H2.07997L2.53998 33.7106ZM2.53998 22.2894L2.07997 19.3249H2.07996L2.53998 22.2894ZM7.63611 21.4986L8.09612 24.4632L9.96316 24.1734L10.5084 22.3645L7.63611 21.4986ZM8.96741 18.1485L11.6507 19.4901L12.4687 17.854L11.3889 16.3776L8.96741 18.1485ZM5.95905 14.035L3.53751 15.806L3.53753 15.806L5.95905 14.035ZM6.25925 10.1428L8.38056 12.2641L8.38057 12.2641L6.25925 10.1428ZM10.1428 6.25924L8.02145 4.13791L8.02144 4.13793L10.1428 6.25924ZM14.0351 5.95905L15.806 3.53754L15.806 3.53754L14.0351 5.95905ZM18.0111 8.86693L16.2402 11.2884L17.7603 12.4002L19.4223 11.5143L18.0111 8.86693ZM21.5385 7.37915L22.4491 10.2376L24.2183 9.67404L24.503 7.83917L21.5385 7.37915ZM25.2539 -3C22.2955 -3 19.7785 -0.843519 19.3249 2.08001L25.254 2.99997L25.2539 3V-3ZM30.7461 -3H25.2539V3H30.7461V-3ZM36.6751 2.08001C36.2215 -0.843538 33.7045 -3 30.7461 -3V3L30.7461 2.99997L36.6751 2.08001ZM37.426 6.91914L36.6751 2.07997L30.7461 3.00001L31.497 7.83918L37.426 6.91914ZM39.4 6.21955C38.161 5.56246 36.731 4.95691 35.3721 4.52069L33.551 10.2376C34.648 10.5837 35.5771 10.9776 36.5777 11.5143L39.4 6.21955ZM39.7598 11.2884L43.7359 8.38056L40.194 3.53754L36.2179 6.44542L39.7598 11.2884ZM43.7359 8.38057L43.7359 8.38058L47.9785 4.13792C45.8866 2.04597 42.582 1.79109 40.194 3.53754L43.7359 8.38057ZM43.7359 8.38056L47.6194 12.2641L51.862 8.02146L47.9785 4.13793L43.7359 8.38056ZM47.6194 12.2641L47.6194 12.2641L52.4624 15.806C54.2089 13.418 53.954 10.1134 51.862 8.02144L47.6194 12.2641ZM47.6194 12.2641L44.6111 16.3775L49.4541 19.9194L52.4624 15.806L47.6194 12.2641ZM51.2363 20.6328C50.8457 19.3471 50.3041 17.9892 49.7159 16.8069L44.3493 19.4901C44.8296 20.4449 45.1817 21.3267 45.4916 22.3645L51.2363 20.6328ZM53.92 19.3249L48.8239 18.5341L47.9039 24.4632L53 25.2539L53.92 19.3249ZM59 25.2539C59 22.2955 56.8435 19.7785 53.92 19.3249L53 25.2539H53H59ZM59 30.7461V25.2539H53V30.7461H59ZM53.92 36.6751C56.8435 36.2215 59 33.7046 59 30.7461H53L53 30.7461L53.92 36.6751ZM48.5838 37.5031L53.92 36.6751L53 30.7461L47.6638 31.5741L48.5838 37.5031ZM49.4717 38.9595C50.033 37.8915 50.5632 36.668 50.962 35.5106L45.2856 33.5667C44.9681 34.5012 44.6234 35.296 44.1656 36.1585L49.4717 38.9595ZM52.4625 40.194L49.2402 35.788L44.3972 39.3299L47.6194 43.7359L52.4625 40.194ZM51.8621 47.9786C53.9541 45.8866 54.2089 42.582 52.4625 40.194L47.6194 43.7359L47.6194 43.7359L51.8621 47.9786ZM47.9786 51.8621L51.8621 47.9785L47.6194 43.7359L43.7359 47.6194L47.9786 51.8621ZM40.194 52.4625C42.582 54.2089 45.8866 53.954 47.9785 51.8621L43.7359 47.6194L43.7359 47.6194L40.194 52.4625ZM35.6486 49.1382L40.194 52.4625L43.7359 47.6194L39.1905 44.2952L35.6486 49.1382ZM35.5044 50.7279C36.5895 50.3732 37.7407 49.9029 38.7501 49.4055L36.089 44.0279C35.2738 44.4335 34.5263 44.7391 33.6502 45.0216L35.5044 50.7279ZM36.6751 53.92L37.5418 48.3348L31.6128 47.4147L30.7461 53L36.6751 53.92ZM30.7461 59C33.7046 59 36.2215 56.8435 36.6751 53.92L30.7461 53L30.7461 53V59ZM25.2539 59H30.7461V53H25.2539V59ZM19.3249 53.92C19.7785 56.8435 22.2955 59 25.2539 59V53L25.254 53L19.3249 53.92ZM18.4582 48.3348L19.3249 53.92L25.2539 53L24.3872 47.4147L18.4582 48.3348ZM17.2498 49.4055C18.2593 49.9029 19.4105 50.3732 20.4957 50.7279L22.3498 45.0216C21.4737 44.7391 20.7262 44.4335 19.911 44.0279L17.2498 49.4055ZM15.806 52.4625L20.3514 49.1382L16.8095 44.2952L12.2641 47.6194L15.806 52.4625ZM8.02145 51.8621C10.1134 53.954 13.418 54.2089 15.806 52.4625L12.2641 47.6194L12.2641 47.6194L8.02145 51.8621ZM4.13792 47.9785L8.02144 51.8621L12.2641 47.6194L8.38057 43.7359L4.13792 47.9785ZM3.53754 40.194C1.79107 42.582 2.04597 45.8866 4.13794 47.9786L8.38056 43.7359L8.38055 43.7359L3.53754 40.194ZM6.75982 35.788L3.53753 40.194L8.38056 43.7359L11.6028 39.3299L6.75982 35.788ZM5.03803 35.5106C5.43684 36.6679 5.96702 37.8915 6.52829 38.9594L11.8344 36.1585C11.3766 35.296 11.032 34.5012 10.7144 33.5667L5.03803 35.5106ZM2.07997 36.6751L7.41621 37.5031L8.33623 31.5741L2.99999 30.7461L2.07997 36.6751ZM-3 30.7461C-3 33.7046 -0.843513 36.2215 2.07996 36.6751L2.99999 30.7461L3 30.7461H-3ZM-3 25.2539V30.7461H3V25.2539H-3ZM2.07996 19.3249C-0.843514 19.7785 -3 22.2955 -3 25.2539H3H2.99999L2.07996 19.3249ZM7.1761 18.5341L2.07997 19.3249L2.99999 25.2539L8.09612 24.4632L7.1761 18.5341ZM6.28409 16.807C5.69593 17.9893 5.15428 19.3471 4.76377 20.6328L10.5084 22.3645C10.8183 21.3267 11.1704 20.4449 11.6507 19.4901L6.28409 16.807ZM3.53753 15.806L6.5459 19.9195L11.3889 16.3776L8.38056 12.2641L3.53753 15.806ZM4.13793 8.02144C2.04593 10.1134 1.79114 13.418 3.53751 15.806L8.38058 12.2641L8.38056 12.2641L4.13793 8.02144ZM8.02144 4.13793L4.13792 8.02146L8.38057 12.2641L12.2641 8.38056L8.02144 4.13793ZM15.806 3.53754C13.418 1.79109 10.1134 2.04597 8.02145 4.13791L12.2641 8.38058L12.2641 8.38057L15.806 3.53754ZM19.7821 6.44542L15.806 3.53754L12.2641 8.38056L16.2402 11.2884L19.7821 6.44542ZM20.6279 4.52068C19.269 4.95691 17.8391 5.56245 16.6 6.21954L19.4223 11.5143C20.423 10.9776 21.352 10.5837 22.4491 10.2376L20.6279 4.52068ZM19.3249 2.07997L18.574 6.91914L24.503 7.83917L25.254 3.00001L19.3249 2.07997Z" fill={color} mask="url(#path-1-inside-1)" />
      <circle cx="28" cy="28" r="11.5" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export default SettingsIcon;
