/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const CreditCardIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.81818 3H21.1818C22.186 3 23 3.89543 23 5V17C23 18.1046 22.186 19 21.1818 19H2.81818C1.81403 19 1 18.1046 1 17V5C1 3.89543 1.81403 3 2.81818 3ZM3 10V17H21V10H3ZM3 8H21V5H3V8Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default CreditCardIcon;
