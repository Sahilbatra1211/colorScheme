import React from 'react'
import ListView from '../kai-ui/src/views/ListView/ListView'
import IconList from '../kai-ui/src/components/IconListItem/IconListItem'

export default function HomeScreen() {
    return (
        <div>
            <ListView>
                <IconList primary='sahil' secondary='jfsadsj' no={3}></IconList>
                <IconList primary='sahil' secondary='jfsadsj' no={3}></IconList>
                <IconList primary='sahil' secondary='jfsadsj' no={3}></IconList>
            </ListView>
            
        </div>
    )
}
