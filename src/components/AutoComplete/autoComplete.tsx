import React, { ReactElement, InputHTMLAttributes, FC, ChangeEvent, useState, useEffect } from 'react'
import Icon from '../Icon/icon'
import Input, { InputProps } from '../Input/input'
interface DataSourceObject {
    value: string
}
export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions?: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>
    onSelect?: (item: DataSourceType) => void
    renderOption?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props
    const [suggestion, setSuggestion] = useState<DataSourceType[]>([])
    const [inputValue, setInputValue] = useState(value as string)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if (inputValue) {
            const results = fetchSuggestions(inputValue)
            if (results instanceof Promise) {
                console.log('trigger')
                setLoading(true)
                results.then(data => {
                    setLoading(false)
                    setSuggestion(data)
                })
            } else {
                setSuggestion(results)
            }
        } else {
            setSuggestion([])
        }
    }, [inputValue])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setInputValue(value)
    }
    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value)
        setSuggestion([])
        if (onSelect) {
            onSelect(item)
        }
    }
    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item) : item.value
    }
    const generateDropdown = () => {
        return (
            <ul>
                {suggestion.map((item, index) => {
                    return (
                        <li key={index} onClick={() => handleSelect(item)}>{renderTemplate(item)}</li>
                    )
                })}
            </ul>
        )
    }
    return (
        <div className='btree-auto-complete'>
            <Input value={inputValue} onChange={handleChange} {...restProps}></Input>
            {isLoading && <ul><Icon icon="spinner" spin></Icon></ul>}
            {
                (suggestion.length > 0) ? generateDropdown() : null
            }
        </div >
    )
}


export default AutoComplete;