import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <div className='mx-5 my-20 p-4 md:p-8 border-2 rounded-lg border-black flex flex-col items-center justify-center gap-5'>
            <h3 className='text-4xl md:text-5xl'>About <span className='text-border'>Us</span></h3>
            <div className='relative rounded overflow-hidden'>
                <Image
                    src='https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/66978785-cb9d-4383-b88a-65bfb99b0c79'
                    alt='desk_image'
                    width={1024}
                    height={720}
                    className='aspect-video!'
                />
            </div>
            <p className='text-sm tracking-tight md:text-lg xl:text-xl xl:px-8 text-justify'>{"Armor exists to add that extra edge to the ordinary—not to 'revolutionize' the market but to challenge the norm. We don't overpromise or oversell, but we take pride in what we create. Every day, our team pushes boundaries to craft designs that break the mould, bringing a mix of style, quality, and a little bit of fun."}</p>
        </div>
    )
}
