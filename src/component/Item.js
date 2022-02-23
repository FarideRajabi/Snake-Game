import React from 'react';
import './Item.css';
const Item = (props) => {
return (
    <div className={props.className}>{props.children}</div>
)
}
export default Item;