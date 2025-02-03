import React from 'react'
import './Circle.css';

export const Circle = (props) => {
    return (
        <div class="cercle box" data-skill="css">
            <span className='value'>
                {props.value+"%"}
            </span>
            <svg viewBox="0 0 36 36">
                <path class="circle"
                stroke-dasharray={props.value+' , 100'}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831
                "
                />
            </svg>
            <span>{props.name}</span>
        </div>
    )
}
export default Circle;