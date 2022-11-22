import React from "react";
//@ts-ignore
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
const defaultMenu = () => (
    <Menu defaultIndex='0' onSelect={(index) => { action(`clicked ${index} item`) }} >
        <MenuItem>
            cool link
        </MenuItem>
        <MenuItem disabled>
            disabled
        </MenuItem>
        <MenuItem>
            cool link 2
        </MenuItem>
        <SubMenu title="dropdown">
            <MenuItem>
                drop1
            </MenuItem>
        </SubMenu>
    </Menu>
)
storiesOf('Menu Component', module)
    .add('Menu', defaultMenu)