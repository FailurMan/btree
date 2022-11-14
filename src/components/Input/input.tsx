import React, { ReactElement, InputHTMLAttributes, FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import Icon from '../Icon/icon'
type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean
    size?: InputSize
    icon?: IconProp
    prepend?: string | ReactElement
    append?: string | ReactElement;
}


export const Input: FC<InputProps> = (props) => {
    //取出所有属性
    const { disabled, size, icon, prepend, append, children, style, ...restProps } = props
    //根据属性计算不,同的className
    const cnames = classNames('btree-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })

    return (
        //根据属性判断是否添加特定的节点
        <div className={cnames} style={style}>
            {prepend && <div className='btree-input-group-prepend'>{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
            <input className="btree-input-inner" disabled={disabled} {...restProps} />
            {append && <div className="btree-input-group-append">{append}</div>}
        </div>
    )
}