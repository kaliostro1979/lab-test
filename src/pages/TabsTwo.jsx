import React, {useState} from 'react';
import TabsNavBar from "../components/tabs/TabsNavBar";
import TabsItem from "../components/tabs/TabsItem";


const mockData = [
    {id: 1, backgroundColor: '#ffbebe'},
    {id: 2, backgroundColor: '#c9f9bb'},
    {id: 3, backgroundColor: '#f9e187'},
]


const TabsTwo = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (e)=>{
        setActiveIndex(e.target.getAttribute('data-index'))
    }

    return (
        <div className={'Tabs'}>
            <TabsNavBar callBack={handleClick}/>
            {
                mockData.map((item, index)=>{
                    return <TabsItem
                        backgroundColor={item.backgroundColor}
                        index={index}
                        key={item.id * Math.random()}
                        show={index + 1 === +activeIndex}
                    />
                })
            }
        </div>
    );
};

export default TabsTwo;
