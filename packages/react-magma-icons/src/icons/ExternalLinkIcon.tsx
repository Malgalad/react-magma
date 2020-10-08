import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 28 24',
  paths: [
    {
      d:
        'M22,16.5v5A4.51,4.51,0,0,1,17.5,26H4.5a4.33,4.33,0,0,1-3.18-1.32A4.33,4.33,0,0,1,0,21.5V8.5A4.33,4.33,0,0,1,1.32,5.32,4.33,4.33,0,0,1,4.5,4h11a.48.48,0,0,1,.5.5v1a.48.48,0,0,1-.5.5H4.5a2.41,2.41,0,0,0-1.77.73A2.41,2.41,0,0,0,2,8.5v13a2.41,2.41,0,0,0,.73,1.77A2.41,2.41,0,0,0,4.5,24h13A2.49,2.49,0,0,0,20,21.5v-5a.49.49,0,0,1,.14-.36A.51.51,0,0,1,20.5,16h1a.49.49,0,0,1,.36.14A.51.51,0,0,1,22,16.5ZM28,3v8a.94.94,0,0,1-.3.7,1,1,0,0,1-1.4,0L23.55,9,13.36,19.14a.5.5,0,0,1-.36.16.54.54,0,0,1-.36-.16l-1.78-1.78a.49.49,0,0,1,0-.72L21.05,6.45,18.3,3.7A.94.94,0,0,1,18,3a1,1,0,0,1,.3-.7A1,1,0,0,1,19,2h8a.94.94,0,0,1,.7.3A1,1,0,0,1,28,3Z',
      transform: 'translate(0 -2)',
    },
  ],
};

export const ExternalLinkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
