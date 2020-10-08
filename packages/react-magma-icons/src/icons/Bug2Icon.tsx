import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 25 24.5',
  paths: [
    {
      d:
        'M25.5,15.75a1,1,0,0,1-.3.7.94.94,0,0,1-.7.3H21A9.09,9.09,0,0,1,20,21.28l3.25,3.27a1,1,0,0,1,0,1.4.91.91,0,0,1-.7.3.92.92,0,0,1-.7-.3l-3.09-3.07-.24.2c-.1.08-.32.23-.65.44a8.7,8.7,0,0,1-1,.57,7.16,7.16,0,0,1-1.28.46,6.16,6.16,0,0,1-1.52.2v-14H12v14a6.07,6.07,0,0,1-1.58-.21A5.94,5.94,0,0,1,9.06,24a9.67,9.67,0,0,1-1-.61,4.37,4.37,0,0,1-.68-.51l-.24-.21L4.25,25.92a1,1,0,0,1-.75.33A1,1,0,0,1,2.83,26a1,1,0,0,1-.32-.7,1,1,0,0,1,.24-.72L5.91,21A9.42,9.42,0,0,1,5,16.75H1.5a1,1,0,0,1-.7-.3,1,1,0,0,1-.3-.7A1,1,0,0,1,.8,15a1,1,0,0,1,.7-.29H5v-4.6L2.3,7.45a1,1,0,0,1-.3-.7,1,1,0,0,1,1-1A1,1,0,0,1,3.71,6l2.7,2.71H19.6L22.3,6a1,1,0,0,1,.7-.29,1,1,0,0,1,1,1,1,1,0,0,1-.29.7L21,10.15v4.6h3.5a1,1,0,0,1,1,1Zm-7.5-9H8a5,5,0,0,1,5-5,4.82,4.82,0,0,1,3.54,1.46A4.78,4.78,0,0,1,18,6.75Z',
      transform: 'translate(-0.5 -1.75)',
    },
  ],
};

export const Bug2Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
