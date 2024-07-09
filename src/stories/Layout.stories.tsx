import type { Meta, StoryObj } from '@storybook/react';
import { TealMainLayout } from '../layouts';
const meta = {
    title: 'TealLava/Layout',
    component: TealMainLayout,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof TealMainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <div>child</div>
        )
    }
};