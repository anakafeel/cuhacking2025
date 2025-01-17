import type { Meta, StoryObj } from '@storybook/react'
import EmailContentRejection from './email-content-rejection'

const meta: Meta<typeof EmailContentRejection> = {
  title: 'Marketing/Email Content Rejection',
  component: EmailContentRejection,
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

// Default story to render the EmailContentRejection as it is
export const Default: Story = {}
