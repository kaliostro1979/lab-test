import React, {useState} from 'react';
import TabsNavBar from "../components/tabs/TabsNavBar";
import TabsItem from "../components/tabs/TabsItem";


const Tabs = () => {
    const [activeIndex, setActiveIndex] = useState('1')
    const handleClick = (e)=>{
        setActiveIndex(e.target.getAttribute('data-index'))
    }

    return (
        <div className={'Tabs'}>
            <TabsNavBar callBack={handleClick}/>
            <div className={'TabsBody'}>
                <TabsItem show={activeIndex === '1'} index={1} key={Date.now()}/>
                <TabsItem show={activeIndex === '2'} index={2} key={Date.now() * 2}/>
                <TabsItem show={activeIndex === '3'} index={3} key={Date.now() * 3}/>
            </div>
        </div>
    );
};

export default Tabs;
