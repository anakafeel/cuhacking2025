import type { Meta, StoryObj } from '@storybook/react'
import EmailKeyboard from './email-keyboard'

const meta: Meta<typeof EmailKeyboard> = {
  title: 'Marketing/Email Keyboard',
  component: EmailKeyboard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultEmailKeyboard: Story = {
  render: () => <EmailKeyboard />,
}
