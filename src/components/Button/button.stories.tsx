import React from "react";
//@ts-ignore
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from "./button";

const styles: React.CSSProperties = {
    textAlign: 'center'
}
const defaultButton = () => (
    <Button onClick={action('clicked')}>default button</Button>
)
const buttonWithSize = () => (
    <>
        <Button size="lg">large button</Button>
        <Button size="sm">small button</Button>
    </>
)
const buttonWithType = () => (
    <>
        <Button btnType="primary">primary button</Button>
        <Button btnType="danger">danger button</Button>
        <Button btnType="link">link button</Button>
    </>
)
storiesOf('Button Component', module)
    .addParameters({
        info: {
            inline: true
        }
    })
    .add('Button', defaultButton)
    .add('不同尺寸的button', buttonWithSize)
    .add('不同类型的type', buttonWithType)