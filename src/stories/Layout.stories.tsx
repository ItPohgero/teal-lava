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
        ),
        CompanyList: [
            {
                label: "PT Kaldu Sari Nabati",
                value: "ksni"
            },
            {
                label: "PT Pinus Merah Indonesia",
                value: "pma"
            },
        ],
        MenuModule: [
            {
                label: "Sales",
                key: "sls"
            }
        ],
        MenuSideBar: [
            {
                "id": "9911d526-6f80-4614-9007-7d8780c6a04c",
                "key": "submodule 1",
                "title": "submodule 1",
                "icon": "solar:asteroid-bold-duotone",
                "children": [
                    {
                        "id": "acbe1ea7-0d1e-4a01-8eef-5b063b55577d",
                        "key": "menu2",
                        "title": "menu 2"
                    },
                    {
                        "id": "df30ae54-7434-4545-be4e-ed95cf213b44",
                        "key": "serius",
                        "title": "serius"
                    },
                    {
                        "id": "8e5c3a60-0003-4aea-8869-1927150d6588",
                        "key": "menu3",
                        "title": "menu3"
                    }
                ]
            },
            {
                "id": "9f53cf1b-5d8a-4522-84e5-a2a081ecf2a8",
                "type": "title",
                "title": "pma receving"
            },
            {
                "id": "c38fc70b-760b-44dc-96f7-202b1fc004f9",
                "key": "menu 1",
                "title": "menu 1",
                "icon": "solar:asteroid-bold-duotone",
                "children": null
            },
            {
                "id": "8be1a999-ffca-4fb8-9041-bf24e4c010a3",
                "key": "submodule 2",
                "title": "submodule 2",
                "icon": "solar:asteroid-bold-duotone",
                "children": [
                    {
                        "id": "df934db9-fdb3-4a01-8529-833c56553d42",
                        "key": "tetst",
                        "title": "test"
                    }
                ]
            },
            {
                "id": "08f9f1f4-1970-4a4c-a00b-d242a6e641ab",
                "key": "testin",
                "title": "testin",
                "icon": "solar:asteroid-bold-duotone",
                "children": null
            }
        ],
    }
};