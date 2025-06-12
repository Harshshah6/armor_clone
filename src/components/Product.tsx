import { cn } from '@/lib/utils'
import React from 'react'
import Chip from './ui/Chip'

function Product() {
    return (
        <div className='px-5'>
            <div
                className={cn(
                    'border-2 rounded-lg relative max-w-full self-stretch',
                    'mt-5 mb-10 leading-tight',
                    'flex items-center justify-center',
                )} >
                <div className='flex flex-col md:flex-row gap-2 p-4'>
                    <div className='flex-1'>
                        <video
                            src="https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/00258507-5d09-4925-8956-1cc3d6c2b947"
                            preload="auto"
                            autoPlay={true}
                            muted={true}
                            loop={true} />
                    </div>
                    <div className='flex-1 flex flex-col justify-around'>
                        <div>
                            <h1 className='font-normal text-4xl md:text-5xl'>version.<span className='text-accent'>H1</span></h1>
                            <div className='flex flex-wrap items-center mt-8 gap-2'>
                                <Chip text='Wired' />
                                <Chip text='USB Type C + A' />
                                <Chip text='Over Ear' />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <div className='flex flex-col'>
                                <span className='text-3xl font-extrabold'>₹2,999</span>
                                <span className='text-xs text-border'>Includes all shipping and taxes</span>
                            </div>
                            <ul className='flex flex-col mt-3 gap-1'>
                                <li className='ml-5 font-bold list-disc'>7.1 Surround Sound</li>
                                <li className='ml-5 font-bold list-disc'>Detachable Microphone</li>
                                <li className='ml-5 font-bold list-disc'>Comfortable Fabric Earcups</li>
                                <li className='ml-5 font-bold list-disc'>In-line audio controller</li>
                                <li className='ml-5 font-bold list-disc'>Made for PC, Laptop & Console Use</li>
                            </ul>
                        </div>
                        <button className='cursor-pointer mt-4 rounded bg-[#2b2b2b] p-3 w-full md:w-[75%] text-2xl text-secondary'>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
