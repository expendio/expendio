/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const WalletIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M15.4506 1.40266C16.5126 1.09921 17.6196 1.7142 17.923 2.77627C17.9741 2.95495 18 3.13988 18 3.32571V4.99998H20C21.1046 4.99998 22 5.89541 22 6.99998V19C22 20.1045 21.1046 21 20 21H4C2.89543 21 2 20.1045 2 19H2.0267C2.00895 18.8924 2 18.7835 2 18.6742V6.75428C2 5.86132 2.59195 5.07655 3.45056 4.83123L15.4506 1.40266ZM10.1401 19H20V11H18V15.2457C18 16.1386 17.408 16.9234 16.5494 17.1687L10.1401 19ZM20 6.99998V8.99998H18V6.99998H20ZM4 6.75426V18.6742L16 15.2457V3.32568L4 6.75426ZM14 8.99998C14 9.55227 13.5523 9.99998 13 9.99998C12.4477 9.99998 12 9.55227 12 8.99998C12 8.4477 12.4477 7.99998 13 7.99998C13.5523 7.99998 14 8.4477 14 8.99998Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default WalletIcon;
