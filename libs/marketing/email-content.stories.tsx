import type { Meta, StoryObj } from '@storybook/react'
import EmailContent from './email-content'

const meta: Meta<typeof EmailContent> = {
  title: 'Marketing/Email Content',
  component: EmailContent,
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

// Default story to render the EmailContent as it is
export const Default: Story = {}
