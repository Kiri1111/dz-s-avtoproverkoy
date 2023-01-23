import React from 'react'
import sortDown from './sortDown.png'
import sortUp from './sortUp.png'
import sort from './sort.png'
import s from '../../HW15.module.css'


// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

const downIcon = sortDown
const upIcon = sortUp
const noneIcon = sort

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент,
    // sort: (click) => down (click) => up (click) => '' (click) => down ...
    switch (sort) {
        case '':
            return down
        case up:
            return ''
        case down:
            return up
        default :
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = ({sort, value, onChange, id = 'hw15',}) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => onChange(pureChange(sort, down, up))

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon
    // const icon = (sort: string) => {
    //     if (sort === down) return downIcon;
    //     if (sort === up) return upIcon;
    //     return noneIcon;
    // }
    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img className={s.iconSort}
                 id={id + '-icon-' + sort}
                 src={icon}

            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
