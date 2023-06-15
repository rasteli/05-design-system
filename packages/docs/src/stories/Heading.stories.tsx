import { Heading, HeadingProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Hello world',
    variant: 'md',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o componente Heading renderiza um elemento `<h2>`. Isso pode ser alterado usando a prop `as`.',
      },
    },
  },
}
