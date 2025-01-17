import type { Meta, StoryObj } from '@storybook/react'
import EmailFooter from './email-footer'

const meta: Meta<typeof EmailFooter> = {
  title: 'Marketing/Email Footer',
  component: EmailFooter,
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

export const Default: Story = {
  render: () => <EmailFooter />,
}
