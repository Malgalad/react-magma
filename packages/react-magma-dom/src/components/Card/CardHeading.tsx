import * as React from 'react';
import styled from '../../theme/styled';
import { Heading } from '../Heading';

export interface CardHeadingProps
  extends React.LabelHTMLAttributes<HTMLHeadingElement> {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  isInverse?: boolean;
  testId?: string;
}

const StyledCardHeading = styled(Heading)`
  font-size: 1.467em;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 20px;
`;

export const CardHeading = React.forwardRef<
  HTMLHeadingElement,
  CardHeadingProps
>((props, ref) => {
  const { headingLevel, children, ...other } = props;

  return (
    <StyledCardHeading
      {...other}
      level={headingLevel ? headingLevel : 4}
      ref={ref}
      testId={props.testId}
    >
      {children}
    </StyledCardHeading>
  );
});
