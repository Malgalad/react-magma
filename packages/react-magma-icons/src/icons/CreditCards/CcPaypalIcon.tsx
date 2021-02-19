/******************************************************
 * This file was created by scripts/generate.js as part
 * of the build process. Do not edit this file directly.
 ******************************************************/

import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M7.7606 12.1048c0 .257-.0884.4706-.2654.6405-.177.17-.394.2551-.651.2555-.2014 0-.3628-.0556-.4841-.1668-.1214-.1113-.1822-.264-.1826-.4585 0-.257.0867-.474.2601-.651.1735-.177.3887-.2654.6458-.2654.1944 0 .3558.0573.4842.172.1283.1148.1925.2727.1925.4737h.0005zm8.1766-1.5522c0 .2916-.0764.4896-.2293.5938-.1528.1042-.382.1563-.6877.1563l-.333.0105.1772-1.1147c.014-.0762.0592-.1144.1354-.1144h.1872c.1529 0 .2744.007.3646.021.0902.014.177.0574.2602.1301.0832.0728.1248.1787.1248.318l.0006-.0006zm3.6563 1.5522c0 .25-.0885.4618-.2654.6353-.177.1734-.3904.2601-.6405.2601-.2014 0-.3646-.0556-.4894-.1668-.1248-.1112-.1873-.264-.1873-.4585 0-.257.0868-.474.2602-.651.1734-.177.3887-.2654.6458-.2654.1944 0 .3558.0573.4841.172.1283.1148.1925.2729.1925.4743zM5.344 10.3233c0-.4099-.1338-.7068-.4013-.8907-.2676-.184-.6166-.276-1.0471-.276H2.2289c-.1318 0-.2047.066-.2187.1978l-.6773 4.2501c-.007.0417.0035.0798.0315.1144.028.0346.0628.0519.1044.0519h.7916c.1388 0 .2153-.066.2293-.1977l.1872-1.1457a.2024.2024 0 01.073-.1353c.0415-.0347.0936-.0572.1563-.0677a1.0744 1.0744 0 01.1773-.0158c.0556 0 .1215.0035.1977.0105.0763.007.1249.0105.1459.0105.5973 0 1.0661-.1684 1.4064-.5051.3403-.3368.5104-.8039.5104-1.4012zm3.2188 3.2498l.427-2.719c.007-.0416-.0035-.0797-.0315-.1143-.028-.0346-.0628-.052-.1044-.052h-.7916c-.0972 0-.1563.1146-.1773.3437-.1875-.2777-.5172-.4165-.9893-.4165-.5001 0-.9256.1874-1.2764.5623-.3507.3749-.5261.8159-.5261 1.323 0 .4099.1197.7364.3593.9794s.5608.3646.9637.3646c.1944 0 .3958-.0416.6043-.1248.2084-.0833.375-.1943.5-.3331-.0277.0832-.0415.1561-.0415.2187 0 .1113.0451.1669.1353.1669h.7187c.1318 0 .2082-.066.2292-.1978l.0006-.0011zm4.6562-2.7394c0-.0346-.0138-.0676-.0414-.0991-.0277-.0315-.059-.0471-.094-.0467h-.802c-.0763 0-.1387.0348-.1873.1044L10.99 12.4175l-.4585-1.5628c-.0346-.1112-.111-.1668-.2293-.1668h-.781c-.0347 0-.066.0155-.094.0467-.028.031-.0418.0641-.0414.0991 0 .014.0677.219.203.6149.1353.3958.2812.8228.4375 1.281.1563.458.238.7011.245.7291-.5693.7778-.854 1.1945-.854 1.2501 0 .0902.0451.1353.1353.1353h.8021c.0762 0 .1387-.0348.1873-.1044l2.6565-3.833c.014-.014.021-.0384.021-.073h-.0006zm3.9579-.5104c0-.4099-.1338-.7068-.4014-.8907-.2675-.184-.6165-.276-1.047-.276h-1.6561c-.1388 0-.2153.066-.2293.1978l-.6772 4.2501c-.007.0417.0035.0798.0315.1144.028.0346.0628.0519.1044.0519h.854c.0832 0 .1388-.0451.1668-.1353l.1873-1.2081a.2024.2024 0 01.0729-.1353c.0416-.0347.0937-.0572.1563-.0677a1.0744 1.0744 0 01.1774-.0158c.0556 0 .1215.0035.1977.0105.0762.007.1248.0105.1458.0105.5974 0 1.0662-.1684 1.4065-.5051.3402-.3368.5104-.8039.5104-1.4012zm3.2188 3.2498l.427-2.719c.007-.0416-.0035-.0797-.0315-.1143-.028-.0346-.0628-.052-.1044-.052h-.7916c-.0972 0-.1563.1146-.1773.3437-.1805-.2777-.5103-.4165-.9894-.4165-.5 0-.9255.1874-1.2763.5623s-.5262.8159-.5262 1.323c0 .4099.1198.7364.3594.9794.2395.243.5607.3646.9636.3646.2015 0 .4064-.0416.6149-.1248.2084-.0833.3715-.1943.4894-.3331 0 .007-.007.0383-.021.0939-.014.0556-.021.0972-.021.1248 0 .1113.045.1669.1353.1669h.7187c.1318 0 .2082-.066.2292-.1978l.0012-.0011zm2.2709-4.2601v-.0105c0-.0972-.0451-.1459-.1353-.1459h-.7706c-.0762 0-.1213.0382-.1353.1144l-.6773 4.3335-.0105.021c0 .0347.0138.0677.0414.0992a.1312.1312 0 00.1044.0467h.6878c.1318 0 .2047-.066.2187-.1978l.6767-4.2606zM4.0833 10.7089c-.0346.243-.1248.4027-.2706.479-.1459.0761-.3541.1142-.6248.1142l-.3436.0105.1774-1.1147c.014-.0762.059-.1143.1353-.1143h.1977c.2777 0 .4791.0398.6044.1195.1252.0798.1668.2482.1248.5052l-.0006.0006zM24 5.3335v13.3332c0 .3613-.132.6737-.396.9374-.2641.2637-.5766.3957-.9375.396H1.3335c-.3613 0-.6738-.132-.9374-.396-.2637-.264-.3957-.5765-.3961-.9374V5.3335c0-.3613.132-.6738.396-.9374.2641-.2637.5766-.3957.9375-.3961h21.333c.3613 0 .6738.132.9374.396.2637.2641.3957.5766.3961.9375z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const CcPaypalIcon = (props: IconProps) => renderIcon(props, iconType);
