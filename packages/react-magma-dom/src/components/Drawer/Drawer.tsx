import * as React from 'react';
import { Modal, ModalProps } from '../Modal';
import { Transition } from '../Transition';

export enum DrawerPosition {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

export interface DrawerProps extends ModalProps {
  /**
   * @children required
   */
  testId?: string;
  /**
   * Style properties for the drawer
   */
  style?: React.CSSProperties;
  /**
   * Style properties for the drawer container
   */
  containerStyle?: React.CSSProperties;
  /**
   * Style properties for the drawer
   */
  drawerStyle?: React.CSSProperties;
  /**
   * Set the position of the drawer
   */
  position?: DrawerPosition;
}

const transitionPreset: {
  [key in DrawerPosition]: { [key: string]: boolean };
} = {
  top: { slideTop: true },
  bottom: { slideBottom: true },
  left: { slideLeft: true },
  right: { slideRight: true },
};

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (props, ref) => {
    const {
      children,
      containerStyle,
      drawerStyle,
      position,
      style,
      theme,
      ...rest
    } = props;
    return (
      <>
        <Transition {...transitionPreset[position]}>
          <Modal
            containerStyle={{
              ...containerStyle,
              ...rest,
            }}
            style={{
              margin: '0',
              maxWidth: '100%',
              borderRadius: '0',
              ...style,
              ...drawerStyle,
            }}
            {...rest}
          />
        </Transition>
      </>
    );
  }
);
