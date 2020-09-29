import * as React from 'react';
import { HiddenStyles } from '../../utils/UtilityStyles';
import { CheckIcon } from 'react-magma-icons';
import { FormGroupContext } from '../FormGroup';
import { InputMessage } from '../Input/InputMessage';
import { StyledLabel } from '../SelectionControls/StyledLabel';
import { StyledContainer } from '../SelectionControls/StyledContainer';
import { css } from '@emotion/core';
// Using the base `styled` from `emotion` until import mapping is fixed: https://github.com/emotion-js/emotion/pull/1220
// import styled from '../../theme/styled';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { useGenerateId } from '../../utils';

export enum ToggleTextPosition {
  left = 'left', // default
  right = 'right'
}

export interface ToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties;
  errorMessage?: React.ReactNode;
  hasError?: boolean;
  isInverse?: boolean;
  isTextVisuallyHidden?: boolean;
  labelStyle?: React.CSSProperties;
  labelText: React.ReactNode;
  testId?: string;
  textPosition?: ToggleTextPosition;
  theme?: any;
  thumbStyle?: React.CSSProperties;
  trackStyle?: React.CSSProperties;
}

const HiddenLabelText = styled.span`
  ${HiddenStyles};
`;

const HiddenInput = styled.input`
  ${HiddenStyles};
`;

const Track = styled.span<{
  checked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  isInverse?: boolean;
  theme?: any;
}>`
  background: ${props => props.theme.colors.neutral04};
  border: 2px solid;
  border-color: ${props =>
    props.hasError ? props.theme.colors.danger : props.theme.colors.neutral04};
  border-radius: 12px;
  box-shadow: ${props =>
    props.isInverse && props.hasError
      ? `0 0 0 1px ${props.theme.colors.neutral08}`
      : '0 0 0'};
  cursor: pointer;
  height: 24px;
  position: relative;
  width: 48px;

  ${props =>
    props.checked &&
    css`
      background: ${props.theme.colors.success02};
      border-color: ${props.hasError
        ? props.theme.colors.danger
        : props.theme.colors.success02};
    `}

  ${props =>
    props.disabled &&
    css`
      background: ${props.theme.colors.neutral06};
      border-color: ${props.theme.colors.neutral06};
      cursor: not-allowed;
    `}

  ${HiddenInput}:focus + label & {
    outline: 2px dotted ${props =>
      props.isInverse
        ? props.theme.colors.focusInverse
        : props.theme.colors.focus};
    outline-offset: 3px;
  }

  &:before { // active state
    background: ${props => props.theme.colors.neutral01};
    border-radius: 50%;
    content: '';
    display: block;
    height: 40px;
    left: -12px;
    opacity: 0;
    margin-top: -22px;
    padding: 50%;
    position: absolute;
    top: 50%;
    transform: scale(1);
    transition: opacity 1s, transform 0.25s;
    width: 40px;

    ${props =>
      props.checked &&
      css`
        background: ${props.theme.colors.success02};
        left: 12px;
      `}
  }

  ${HiddenInput}:not(:disabled):active + label & {
    &:before {
      opacity: 0.4;
      transform: scale(0);
      transition: transform 0s;
    }
  }
`;

const Thumb = styled.span<{
  checked?: boolean;
  disabled?: boolean;
  theme?: any;
}>`
  background: ${props => props.theme.colors.neutral08};
  border-radius: 100%;
  height: 20px;
  left: 0;
  margin-top: -10px;
  position: absolute;
  top: 50%;
  transition: left 0.25s;
  width: 20px;

  ${props =>
    props.checked &&
    css`
      left: 24px;
    `}
`;

const IconContainer = styled.span<{ disabled?: boolean; theme?: any }>`
  color: ${props =>
    props.disabled
      ? props.theme.colors.neutral05
      : props.theme.colors.neutral08};
  left: 7px;
  position: absolute;
  margin-top: -13px;
  top: 50%;
`;

const SpanTextLeft = styled.span`
  padding-right: 10px;
`;

const SpanTextRight = styled.span`
  padding-left: 10px;
`;

const renderLabelText = (
  isTextVisuallyHidden: boolean,
  labelText: React.ReactNode,
  textPosition: ToggleTextPosition,
  labelStyle: React.CSSProperties
) => {
  if (isTextVisuallyHidden) {
    return <HiddenLabelText>{labelText}</HiddenLabelText>;
  }

  return textPosition === ToggleTextPosition.left ? (
    <SpanTextLeft style={labelStyle}>{labelText}</SpanTextLeft>
  ) : (
    <SpanTextRight style={labelStyle}>{labelText}</SpanTextRight>
  );
};

export const Toggle: React.FunctionComponent<ToggleProps> = (
  props: ToggleProps
) => {
  const [checked, setChecked] = React.useState<boolean>(Boolean(props.checked));

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange &&
      typeof props.onChange === 'function' &&
      props.onChange(event);
    setChecked(event.target.checked);
  }

  const {
    containerStyle,
    disabled,
    errorMessage,
    hasError,
    id: defaultId,
    isInverse,
    isTextVisuallyHidden,
    labelStyle,
    labelText,
    textPosition,
    testId,
    trackStyle,
    thumbStyle,
    ...other
  } = props;

  const id = useGenerateId(defaultId);

  const theme = React.useContext(ThemeContext);

  const context = React.useContext(FormGroupContext);

  const descriptionId = errorMessage ? `${id}__desc` : null;
  const groupDescriptionId = context.descriptionId;

  const describedBy =
    descriptionId && groupDescriptionId
      ? `${groupDescriptionId} ${descriptionId}`
      : descriptionId
      ? descriptionId
      : groupDescriptionId
      ? groupDescriptionId
      : null;

  return (
    <>
      <StyledContainer>
        <HiddenInput
          {...other}
          aria-checked={!!checked}
          aria-describedBy={describedBy}
          id={id}
          data-testid={testId}
          disabled={disabled}
          checked={checked}
          type="checkbox"
          onChange={handleChange}
          role="switch"
        />
        <StyledLabel htmlFor={id} style={containerStyle}>
          {textPosition !== ToggleTextPosition.right &&
            renderLabelText(
              isTextVisuallyHidden,
              labelText,
              ToggleTextPosition.left,
              labelStyle
            )}
          <Track
            checked={checked}
            data-testid="toggle-track"
            disabled={disabled}
            hasError={context.hasError || !!errorMessage}
            isInverse={isInverse}
            style={trackStyle}
            theme={theme}
          >
            <IconContainer disabled={disabled} theme={theme}>
              <CheckIcon size={11} />
            </IconContainer>
            <Thumb
              checked={checked}
              disabled={disabled}
              style={thumbStyle}
              theme={theme}
            />
          </Track>
          {textPosition === ToggleTextPosition.right &&
            renderLabelText(
              isTextVisuallyHidden,
              labelText,
              ToggleTextPosition.right,
              labelStyle
            )}
        </StyledLabel>
      </StyledContainer>
      {!!errorMessage && (
        <InputMessage id={descriptionId} isError isInverse={isInverse}>
          {errorMessage}
        </InputMessage>
      )}
    </>
  );
};
