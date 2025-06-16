'use client'
import { ChevronDown } from 'lucide-react';
import React, { useState, useRef } from 'react'

type FAQItemProps = {
    title: string;
    description: string;
};

function FAQItem({ title, description }: FAQItemProps) {
    const [isExpanded, setExpanded] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className='border rounded border-black p-5 flex flex-col transition duration-300'>
            <div
                onClick={() => { setExpanded(!isExpanded) }}
                className='flex flex-row gap-2 md:gap-4 items-center cursor-pointer'>
                <div className='size-6 border-2 rounded-full border-black' />
                <div className='flex-1'>
                    <h2 className='sm:text-2xl text-pretty font-[600]'>{title}</h2>
                </div>
                <div>
                    <ChevronDown className={`size-6 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </div>
            </div>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isExpanded
                        ? contentRef.current
                            ? `${contentRef.current.scrollHeight}px`
                            : '1000px'
                        : '0px',
                    opacity: isExpanded ? 1 : 0,
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                    overflow: 'hidden',
                }}
            >
                <div className='h-[1px] bg-black w-full my-4' />
                <div>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </div>
    )
}

export default FAQItem
