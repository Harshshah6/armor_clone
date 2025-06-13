import React from 'react'

function SectionSeperator({ mainText, secondText }: { mainText: string; secondText: string }) {
    return (
        <div className='px-5 py-14 flex flex-row gap-2 w-full relative z-0'>
            <h1 className='text-5xl'>{mainText} <span className='text-border'>{secondText}</span></h1>
            <div className='hidden md:flex flex-row items-center flex-[1]'>
                <div className='h-[2px] w-full bg-border relative flex'>
                    <div className='size-5 rounded-full bg-border absolute top-[-5px] right-[27%]'></div>
                    <div className='size-6 rounded-full border absolute top-[-12px] right-[27.5%]'></div>
                </div>
            </div>
        </div>
    )
}

export default SectionSeperator
