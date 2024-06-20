import React, { useState } from 'react';
import './Popup.css';
import { Button, Checkbox } from '../index';
const Popup = () => {
    const [isAllPages, setIsAllPages] = useState(false);
    const [dataCheckbox, setDataCheckbox] = useState(
        [
            { 
                label: "Page 1", 
                isActive: false
            },
            { 
                label: "Page 2", 
                isActive: false
            },
            { 
                label: "Page 3", 
                isActive: false
            },
            { 
                label: "Page 4", 
                isActive: false
            }
        ]
    )

    const setActiveAll = () => {
        setIsAllPages(!isAllPages)
        setDataCheckbox(prevData => (
            prevData.map(item => ({
                ...item,
                isActive: !isAllPages
            }))
        ));
    };

    const setActiveOne = (index: any) => {
        setDataCheckbox(prevData => (
          prevData.map((item, idx) => (
            idx === index ? { ...item, isActive: !item.isActive } : item
          ))
        ));
      };

    return (
        <div 
            onClick={() => console.log("div onclick")} 
            className='popup-container'
        >
            <div className='gap-horizontal-6'>
                <Checkbox
                    label='All pages'
                    isActive={isAllPages}
                    onClick={() => setActiveAll()}
                />
            </div>
            <div 
                className='gap-vertical-10-10'
            />
            <div className='gap-horizontal-6'>
                {
                    dataCheckbox.map((item, index) => {
                        return (
                            <Checkbox
                                onClick={() => setActiveOne(index)}
                                label={item.label}
                                isActive={item.isActive}
                                key={index}

                            />
                        )
                    })
                }
            </div>
            <div className='gap-vertical-10-20' />
             <Button
                label='Done'
                onClick={() => console.log("Send!")}
            />
        </div>
    );
};

export default Popup;
