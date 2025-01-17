import type { Meta, StoryObj } from '@storybook/react'
import EmailBannerBackgroundText from './email-banner-background-text'

const meta: Meta<typeof EmailBannerBackgroundText > = {
  title: 'Marketing/Email Banner Background Text ',
  component: EmailBannerBackgroundText,
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
