/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const AdvertisementIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M6 20V18H8V19C8 20.1046 8.89543 21 10 21H13C14.1046 21 15 20.1046 15 19V17H18V18C18 19.1046 18.8954 20 20 20H22C23.1046 20 24 19.1046 24 18V4C24 2.89543 23.1046 2 22 2H4H2C0.89543 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H4C5.10457 22 6 21.1046 6 20ZM2 20V4H20H22V18H20V14H18V15H15V14H13V19H10V14H8V16H6V14H4V20H2ZM19 6V8H5V6H19ZM16 12V10H5V12H16Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default AdvertisementIcon;
