import React, {FC} from 'react';
import exp from "constants";
interface ListProps<T> {
    items: T[];
    renderItem:(item:T) => React.ReactNode
}
export default function List<T>(props: ListProps<any>) {
    return (
        <div>
            {
                props.items.map(props.renderItem)
            }
        </div>
    )
}