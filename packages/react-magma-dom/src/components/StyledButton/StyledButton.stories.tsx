import React from 'react';
import { StyledButton } from '.';
import { ButtonProps, ButtonColor, ButtonSize, ButtonVariant, ButtonType, ButtonTextTransform, ButtonShape } from '../Button'
import { Story, Meta } from '@storybook/react/types-6-0';

const Template: Story<ButtonProps | {isLoading?:boolean}> = args => <StyledButton {...args}>Button</StyledButton>;


export default {
  component: StyledButton,
  title: 'StyledButton',
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ButtonColor,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ButtonSize,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ButtonVariant,
      },
    },
    shape: {
      control: {
        type: 'select',
        options: ButtonShape,
      },
    },
    textTransform: {
      control: {
        type: 'select',
        options: ButtonTextTransform,
      },
    },
    type: {
      control: {
        type: 'select',
        options: ButtonType,
      },
    },
    isInverse: {
      control: {
        type: 'boolean'
      }
    }
  },
} as Meta;

export const Default = Template.bind({});
Default.args = {
  isLoading: true
}

export const Inverse = Template.bind({});
Inverse.args = {
  isInverse: true,
  isLoading: true
}


// export const Small = () => {
//   return < StyledButton isLoading size={ButtonSize.small}> text </ StyledButton >;
// };

// export const Medium = () => {
//   return < StyledButton isLoading size={ButtonSize.medium}> text </ StyledButton >;
// };

// export const Large = () => {
//   return < StyledButton isLoading size={ButtonSize.large}> text </ StyledButton >;
// };

// export const ColorSecondary = () => {
//   return < StyledButton isLoading color={ButtonColor.secondary}> text </ StyledButton >;
// };

// export const ColorSuccess = () => {
//   return < StyledButton isLoading color={ButtonColor.success}> text </ StyledButton >;
// };

// export const ColorDanger = () => {
//   return < StyledButton isLoading color={ButtonColor.danger}> text </ StyledButton >;
// };

// export const ColorMarketing = () => {
//   return < StyledButton isLoading color={ButtonColor.marketing}> text </ StyledButton >;
// };

// export default StoryMeta as Meta
