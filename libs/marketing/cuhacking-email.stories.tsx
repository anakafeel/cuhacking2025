import type { Meta, StoryObj } from '@storybook/react'
import CUHackingEmail from './CUHackingEmail'

const meta: Meta<typeof CUHackingEmail> = {
  title: 'cuHacking Design System/CUHackingEmail',
  component: CUHackingEmail,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The CUHackingEmail component is a styled email template component designed for cuHacking emails.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

// Default story to render the CUHackingEmail as it is
export const Default: Story = {}

// You can customize the email content or its sections in additional stories if needed.
