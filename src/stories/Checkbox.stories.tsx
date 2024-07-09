import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components';
const meta = {
    title: 'TealLava/Action/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxExam: Story = {
    args: {}
};