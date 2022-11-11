import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProp extends FontAwesomeIconProps {
    theme?: ThemeProps
}

const Icon: React.FC<IconProp> = (props) => {
    //icon-primary
    const { className, theme, ...resetProps } = props
    const classes = classNames('btree-icon', className, {
        [`icon-${theme}`]: theme
    })

    return (
        <FontAwesomeIcon className={classes} {...resetProps}></FontAwesomeIcon>
    )
}

export default Icon