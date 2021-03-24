import * as React from 'react';
import { StyledButton } from '../StyledButton';
import {
  ButtonProps,
  ButtonColor,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
  ButtonTextTransform,
} from '../Button';
import { IconProps } from 'react-magma-icons';
import { Omit, XOR } from '../../utils';
import { ThemeContext } from '../../theme/ThemeContext';
import { ThemeInterface } from '../../theme/magma';
import { Spacer } from '../Spacer';

export enum ButtonIconPosition {
  left = 'left',
  right = 'right',
}

export interface IconOnlyButtonProps extends Omit<ButtonProps, 'children'> {
  /**
   * Icon to display within the component
   */
  icon: React.ReactElement<IconProps>;
  /**
   * The text the screen reader will announce. Required for icon-only buttons
   */
  'aria-label': string;
}

export interface IconTextButtonProps extends ButtonProps {
  /**
   * Icon to display within the component
   */
  icon: React.ReactElement<IconProps>;
  children: React.ReactChild | React.ReactChild[];
  /**
   * Position within the button for the icon to appear
   * @default ButtonIconPosition.right
   */
  iconPosition?: ButtonIconPosition;
}

export type IconButtonProps = XOR<IconOnlyButtonProps, IconTextButtonProps>;

export interface ButtonIconProps {
  size?: ButtonSize;
  iconPosition?: ButtonIconPosition;
  children ?: React.ReactElement;
  theme ?: ThemeInterface;
}

function getIconPadding(props) {
  switch (props.size) {
    case 'large':
      return props.theme.spaceScale.spacing05;
    case 'small':
      return props.theme.spaceScale.spacing02;
    default:
      return props.theme.spaceScale.spacing03;
  }
}

function getIconSize(size, theme) {
  switch (size) {
    case 'large':
      return theme.iconSizes.large;
    case 'small':
      return theme.iconSizes.small;
    default:
      return theme.iconSizes.medium;
  }
}

export const ButtonIcon = ({children, size, theme}:ButtonIconProps) => {
  return React.cloneElement(children, {
    size: children.props.size ? children.props.size : getIconSize(size, theme),
  })
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { color=ButtonColor.primary, icon, children, iconPosition=ButtonIconPosition.left ,shape=props.children? ButtonShape.fill : ButtonShape.round, size=ButtonSize.medium, textTransform=ButtonTextTransform.uppercase, variant=ButtonVariant.solid, ...rest } = props;
    const theme = React.useContext(ThemeContext);

    return (
      <StyledButton
        {...rest}
        ref={ref}
        color={color}
        shape={shape}
        size={size}
        textTransform={textTransform}
        variant={variant}
        iconOnly={!children}
      >
        {iconPosition === ButtonIconPosition.left && <ButtonIcon size={size} theme={theme} >{icon}</ButtonIcon>}
        {iconPosition === ButtonIconPosition.left && children && <Spacer size={getIconPadding({size, theme})}/>}
        {children}
        {iconPosition === ButtonIconPosition.right && children && <Spacer size={getIconPadding({size, theme})}/>}
        {iconPosition === ButtonIconPosition.right && <ButtonIcon size={size} theme={theme} >{icon}</ButtonIcon>}
      </StyledButton>
    );
  }
);
