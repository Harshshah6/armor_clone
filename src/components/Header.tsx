import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header>
            <div
                className='p-5 flex items-center justify-center'
            >
                <Image
                    src={"https://armor.shop/cdn/shop/files/b607db1a-c8cf-43d0-b085-d55e4a4aa0ff.png"}
                    width={60}
                    height={12}
                    alt='armor_logo'
                />
            </div>
            <div className='px-5 py-1.5 flex items-center justify-center bg-secondary'>
                <p className='flex leading-tight items-center justify-center text-[15px] gap-2 font-medium'>Immediate Shipping! <ShoppingCart className='size-4' /></p>
            </div>
        </header >
    )
}

export default Header
