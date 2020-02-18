import React from 'react';
import { axe } from 'jest-axe';
import { Textarea } from '.';
import { render, fireEvent } from '@testing-library/react';
import { magma } from '../../theme/magma';

describe('Textarea', () => {
  it('should find element by testId', () => {
    const testId = 'test-id';
    const { getByTestId } = render(<Textarea testId={testId} />);

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should render a textarea with desired attributes', () => {
    const testId = 'test-id';
    const id = 'abc123';
    const placeholder = 'holding a place';
    const value = 'abcdefg';
    const { getByTestId } = render(
      <Textarea
        testId={testId}
        id={id}
        placeholder={placeholder}
        value={value}
      />
    );
    const textarea = getByTestId(testId);

    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('id', id);
    expect(textarea).toHaveAttribute('placeholder', placeholder);
    expect(textarea).not.toHaveAttribute('required');
    expect(textarea).not.toHaveAttribute('autoFocus');
  });

  it('should trigger the passed in onChange when value of the textarea is changed', () => {
    const targetValue = 'Change';
    const onChangeSpy = jest.fn();
    const labelText = 'test label';
    const { getByLabelText } = render(
      <Textarea labelText={labelText} onChange={onChangeSpy} value="" />
    );

    fireEvent.change(getByLabelText(labelText), {
      target: { value: targetValue }
    });

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('should render a textarea with a correctly styled helper message', () => {
    const testMessage = 'Test message';
    const { getByText } = render(<Textarea helperMessage={testMessage} />);

    const helperMessage = getByText(testMessage);

    expect(helperMessage).toHaveStyleRule('color', magma.colors.neutral03);
  });

  it('should render a textarea with a correctly styled error message', () => {
    const labelText = 'test label';
    const testHelperMessage = 'Test helper message';
    const testErrorMessage = 'Test error message';
    const { getByText, getByLabelText, queryByText } = render(
      <Textarea
        errorMessage={testErrorMessage}
        helperMessage={testHelperMessage}
        labelText={labelText}
      />
    );

    const errorMessage = getByText(testErrorMessage);

    expect(errorMessage).toBeInTheDocument();

    expect(getByLabelText(labelText)).toHaveStyleRule(
      'border-color',
      magma.colors.danger
    );

    expect(errorMessage).toHaveStyleRule('background', 'none');
    expect(errorMessage).toHaveStyleRule('color', magma.colors.danger);

    const helperMessage = queryByText(testHelperMessage);

    expect(helperMessage).not.toBeInTheDocument();
  });

  it('should render the textarea with visually hidden label text', () => {
    const labelText = 'test label';
    const { getByLabelText } = render(
      <Textarea labelText={labelText} isLabelVisuallyHidden />
    );
    const textarea = getByLabelText(labelText);

    expect(textarea).toHaveAttribute('aria-label', labelText);
  });

  it('Does not violate accessibility standards', () => {
    const { container } = render(<Textarea labelText="test label" />);
    return axe(container.innerHTML).then(result => {
      return expect(result).toHaveNoViolations();
    });
  });
});
