import { type Meta } from '@storybook/react'

import { Button } from './button'

const meta = {
  argTypes: {
    as: {
      control: {
        type: 'radio',
      },
      options: ['button', 'a'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta

const defaultArgs = {
  children: 'Button',
  disabled: false,
  type: 'button',
  variant: 'primary',
}

export const PrimaryBtn = {
  args: {
    ...defaultArgs,
  },
  name: 'Primary button',
}

export const PrimaryBtnHover = {
  args: {
    ...defaultArgs,
  },
  name: 'Primary button - hover',
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const PrimaryBtnActive = {
  args: {
    ...defaultArgs,
  },
  name: 'Primary button - active',
  parameters: {
    pseudo: {
      active: true,
    },
  },
}

export const PrimaryBtnFocus = {
  args: {
    ...defaultArgs,
    children: 'Primary focus',
  },
  name: 'Primary button - focus',
  parameters: {
    pseudo: {
      focus: true,
    },
  },
}

export const PrimaryBtnDisabled = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
  name: 'Primary button disabled',
}

export const OutlinedBtnHover = {
  args: {
    ...defaultArgs,
    variant: 'outlined',
  },
  name: 'Outlined -- hover',
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const OutlinedBtnDisabled = {
  args: {
    ...defaultArgs,
    disabled: true,
    variant: 'outlined',
  },
  name: 'Outlined -- disabled',
}

export const SecondaryBtnFocus = {
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
  name: 'Secondary -- focus',
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const SecondaryBtnDisabled = {
  args: {
    ...defaultArgs,
    disabled: true,
    variant: 'secondary',
  },
  name: 'Secondary -- disabled',
}

/*export const AlertOnClick = {
    args: {
        children: "Alert!",
        onClick: () => alert("Button clicked"),
    },
};

export const ButtonAsLink = {
    args: {
        children: "This is a link",
        as: "a",
        href: "https://google.com",
        target: "_blank",
    },
};*/
