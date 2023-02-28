"use client"

import React, { useState } from 'react';

export default function Tabs({ tabs }: any) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: any) => {
        setActiveTab(index);
    };

    return (
        <div className='width-full'>
            <div className='flex  border-solid border-y border-gold text-gold-darker text-lg font-medium width-full'>
                {tabs.map((tab: any, index: any) => (

                    <div className='w-44 text-center'>
                        <button
                            key={tab.label}
                            onClick={() => handleTabClick(index)}
                            className={index === activeTab ? 'h-full w-full py-5 text-gold bg-active-tab-glow' : 'h-full w-full py-5 '}
                        >
                            {tab.label}
                        </button></div>

                ))}
            </div>
            <div>
                {tabs[activeTab].content}
            </div>
        </div>
    );

}