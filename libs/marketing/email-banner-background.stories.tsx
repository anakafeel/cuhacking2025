import type { Meta, StoryObj } from '@storybook/react'
import EmailBannerBackground from './email-banner-background'

const meta: Meta<typeof EmailBannerBackground> = {
  title: 'Marketing/Email Banner Background',
  component: EmailBannerBackground,
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

export const DefaultEmailBannerBackground: Story = {
  render: () => <EmailBannerBackground />,
}
