import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    const sliderHandler = () => {

    }
    return (
        <Slider
            onInput={sliderHandler}

            sx={{ // стили для слайдера // пишет студент
                width: 147, height: 4
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
