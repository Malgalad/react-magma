import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 40 40',
  paths: [
    {
      d:
        'M19.9980925,18 C20.2931254,18 20.5544584,18.1138166 20.7820916,18.3414497 L36.6547352,34.2140934 C36.8823683,34.4417265 36.9961849,34.7030595 36.9961849,34.9980925 L37,34.9980925 C37,35.2931254 36.8861834,35.5544584 36.6585503,35.7820916 L34.9551167,37.4855251 C34.7274835,37.7131583 34.4661505,37.8269749 34.1711176,37.8269749 C33.8760847,37.8269749 33.6147516,37.7131583 33.3871185,37.4855251 L20,24.0984066 L6.61288151,37.4855251 C6.38524835,37.7131583 6.12391532,37.8269749 5.82888241,37.8269749 C5.53384949,37.8269749 5.27251646,37.7131583 5.0448833,37.4855251 L3.34144973,35.7820916 C3.11381658,35.5544584 3,35.2931254 3,34.9980925 C3,34.7030595 3.11381658,34.4417265 3.34144973,34.2140934 L19.2140934,18.3414497 C19.4417265,18.1138166 19.7030595,18 19.9980925,18 Z M19.9980925,2 C20.2931254,2 20.5544584,2.11381658 20.7820916,2.34144973 L36.6547352,18.2140934 C36.8823683,18.4417265 36.9961849,18.7030595 36.9961849,18.9980925 L37,18.9980925 C37,19.2931254 36.8861834,19.5544584 36.6585503,19.7820916 L34.9551167,21.4855251 C34.7274835,21.7131583 34.4661505,21.8269749 34.1711176,21.8269749 C33.8760847,21.8269749 33.6147516,21.7131583 33.3871185,21.4855251 L20,8.09840664 L6.61288151,21.4855251 C6.38524835,21.7131583 6.12391532,21.8269749 5.82888241,21.8269749 C5.53384949,21.8269749 5.27251646,21.7131583 5.0448833,21.4855251 L3.34144973,19.7820916 C3.11381658,19.5544584 3,19.2931254 3,18.9980925 C3,18.7030595 3.11381658,18.4417265 3.34144973,18.2140934 L19.2140934,2.34144973 C19.4417265,2.11381658 19.7030595,2 19.9980925,2 Z',
    },
  ],
};

export const AngleUpDoubleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
