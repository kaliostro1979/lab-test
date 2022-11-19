import React from 'react';

const TabsNavBar = ({callBack}) => {


    return (
        <div className={'TabsNavBar'}>
            <ul>
                <li data-index={1} className={'Active'} onClick={callBack}>Tab-1</li>
                <li data-index={2} onClick={callBack}>Tab-2</li>
                <li data-index={3} onClick={callBack}>Tab-3</li>
            </ul>
        </div>
    );
};

export default TabsNavBar;
