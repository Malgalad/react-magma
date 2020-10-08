import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 20 22',
  paths: [
    {
      d:
        'M16.29,9.83a3.35,3.35,0,0,0-1-2.53,3.71,3.71,0,0,0-2.68-1h-5v7h5a3.71,3.71,0,0,0,2.68-1A3.37,3.37,0,0,0,16.29,9.83Zm3.7,0a6.55,6.55,0,0,1-2,4.92,7.06,7.06,0,0,1-5.11,1.91H7.6V18.5h7.89a.49.49,0,0,1,.36.14A.47.47,0,0,1,16,19v2a.45.45,0,0,1-.14.36.49.49,0,0,1-.36.14H7.6v3a.46.46,0,0,1-.15.36A.48.48,0,0,1,7.1,25H4.49a.52.52,0,0,1-.36-.14A.51.51,0,0,1,4,24.5v-3H.49a.52.52,0,0,1-.36-.14A.51.51,0,0,1,0,21V19a.49.49,0,0,1,.14-.36.52.52,0,0,1,.36-.14H4V16.66H.49a.49.49,0,0,1-.36-.15A.48.48,0,0,1,0,16.16V13.83a.5.5,0,0,1,.14-.35.49.49,0,0,1,.36-.15H4V3.5a.49.49,0,0,1,.14-.36A.52.52,0,0,1,4.49,3h8.42A7.06,7.06,0,0,1,18,4.91,6.55,6.55,0,0,1,20,9.83Z',
      transform: 'translate(0.01 -3)',
    },
  ],
};

export const RoubleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
