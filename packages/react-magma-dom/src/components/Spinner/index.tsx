import * as React from 'react';
import styled from '../../theme/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { I18nContext } from '../../i18n';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The color of the spinner border
   * @default "#006298"
   */
  color?: string;
  /**
   * The height and width of the spinner in pixels
   * @default 16
   */
  size?: number;
  testId?: string;
}

const StyledSpinner = styled.span<SpinnerProps>`
  animation: spinner-border 0.75s linear infinite;
  border: 2px solid ${props => props.color};
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  height: ${props => props.size}px;
  width: ${props => props.size}px;

  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  (props, ref) => {
    const { 'aria-label': ariaLabel, color, size, testId, ...other } = props;

    const theme = React.useContext(ThemeContext);
    const i18n = React.useContext(I18nContext);
    return (
      <StyledSpinner
        {...other}
        aria-label={ariaLabel ? ariaLabel : i18n.spinner.ariaLabel}
        color={color ? color : theme.colors.primary}
        data-testid={testId}
        ref={ref}
        size={size ? size : theme.iconSizes.small}
      />
    );
  }
);
