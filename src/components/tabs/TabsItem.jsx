import React from 'react';

const TabsItem = (props) => {

    return (
        <div
            className={props.show ? 'TabsItem Show' : 'TabsItem'}
            data-index={props.index}
            style={{backgroundColor: props.backgroundColor}}
        >
            <p>Item - {props.index}</p>
        </div>
    );
}

export default TabsItem;
