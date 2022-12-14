import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AutoComplete, DataSourceType } from "./autoComplete";


interface LakerPlayerProps {
    value: string;
    number: number;
}
const SimpleComplete = () => {
    const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
        'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
    const lakersWithNumber = [
        { value: 'bradley', number: 11 },
        { value: 'pope', number: 1 },
        { value: 'caruso', number: 4 },
        { value: 'cook', number: 2 },
        { value: 'cousins', number: 15 },
        { value: 'james', number: 23 },
        { value: 'AD', number: 3 },
        { value: 'green', number: 14 },
        { value: 'howard', number: 39 },
        { value: 'kuzma', number: 0 },
    ]
    // const handleFetch = (query: string) => {
    //     return lakersWithNumber.filter(player => player.value.includes(query))
    // }

    const handleFetch = (query: string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`).then(res => res.json()).then(({ items }) => {
            console.log(items)
            const formateItems = items.slice(0, 10).map(item => ({ value: item.login, ...item }))
            return formateItems
        })
    }
    const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
        return (
            <>
                <p>Name:{item.value}</p>
            </>
        )
    }
    return (
        <AutoComplete fetchSuggestions={handleFetch} onSelect={action('select')} renderOption={renderOption}></AutoComplete>
    )
}


storiesOf('AutoComplete Component', module).add('AutoComplete SimpleComplete', SimpleComplete)