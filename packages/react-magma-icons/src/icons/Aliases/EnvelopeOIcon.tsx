/******************************************************
 * This file was created by scripts/generate.js as part
 * of the build process. Do not edit this file directly.
 ******************************************************/

import * as React from 'react';
import { IconProps } from '../../IconProps';
import { MailOutlineIcon } from '../Communication/MailOutlineIcon';
export const EnvelopeOIcon = (props: IconProps) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'EnvelopeOIcon has been deprecated, and will be removed in the next major release.  Please check the React Magma docs to find the new set of icons adjust the size/spacing as needed.'
    );
  }
  return <MailOutlineIcon {...props} />;
};
