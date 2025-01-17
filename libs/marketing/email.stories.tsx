import type { Meta, StoryObj } from '@storybook/react'
import CUHackingEmail from './email-full'

const meta: Meta<typeof CUHackingEmail> = {
  title: 'Marketing/Email',
  component: CUHackingEmail,
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

// Default story to render the CUHackingEmail as it is
export const Default: Story = {}

// You can customize the email content or its sections in additional stories if needed.
