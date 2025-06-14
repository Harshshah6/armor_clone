'use client'
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

type FAQItemProps = {
    title: string;
    description: string;
};

function FAQItem({ title, description }: FAQItemProps) {

    const [isExpanded, setExpanded] = useState<boolean>(false);

    return (
        <div className='border rounded border-black p-5 flex flex-col gap-8 transition duration-300'>
            <div
                onClick={() => { setExpanded(!isExpanded) }}
                className='flex flex-row gap-2 md:gap-4 items-center cursor-pointer'>
                <div className='size-6 border-2 rounded-full border-black' />
                <div className='flex-1'>
                    <h2 className='sm:text-2xl text-pretty font-[600]'>{title}</h2>
                </div>
                <div>
                    <ChevronDown className={`size-6 ${isExpanded && "rotate-180"}`} />
                </div>
            </div>
            {
                isExpanded && <>
                    <div className='h-[1px] bg-black w-full' />
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </>
            }
        </div>
    )
}

export default FAQItem
