import React, {FC, ReactChildren, ReactNode, useState} from 'react';

export enum CardVariant {
    outlined="outlined",
    primary = "primary"
}
interface CardProps {
    width?: string
    height?: string
    variant?: CardVariant
    onClick: (num: number) => void;
}
const Card : FC<CardProps> = ({width,height,variant, onClick, children} ) => {
   const [state, setState] = useState(0)
    return (
        <div style={{width,height, border: variant === CardVariant.outlined ? "2px solid green" : "none",
            background: variant === CardVariant.primary ? "lightgray" : ''}}
        onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;