import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Footer() {
    return (
        <div className='mx-5 py-8 px-3 flex flex-col gap-5'>
            <div className='flex justify-between flex-col md:flex-row flex-wrap gap-12'>
                <div className="relative">
                    <Image
                        src={"https://armor.shop/cdn/shop/files/b607db1a-c8cf-43d0-b085-d55e4a4aa0ff.png"}
                        alt='logo_image'
                        width={1024}
                        height={720}
                        className='w-32'
                    />
                </div>
                <LinksBox
                    links={[{ text: "SUPPORT", link: "/" }]}
                />
                <LinksBox
                    links={[{ text: "shipping policy", link: "/" }, { text: "return policy", link: "/" }, { text: "warranty policy", link: "/" }]}
                />
                <LinksBox
                    links={[{ text: "INSTAGRAM", link: "/" }, { text: "youtube", link: "/" }, { text: "linkedin", link: "/" }]}
                />
            </div>
            <div>
                <div>
                    <strong className='text-4xl md:text-lg'>Address</strong>
                    <h6 className='mt-5'>
                        {"Portal Ventures Pvt. Ltd."}
                        <br />
                        {"Ruby Towers, 29 Senapati Bapat Marg"}
                        <br />
                        {"Dadar - West"}
                        <br />
                        {"Mumbai, India, 400028"}
                        <br />
                        {"Email: helpdesk@armor.business"}
                        <br />
                    </h6>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 mt-8'>
                    <div>
                        <span>© {new Date().getFullYear()} - Armor. All Rights Reserved.</span>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-3'>
                        <Link href={"/"} className='border-b border-b-black'>Terms of Use</Link>
                        <Link href={"/"} className='border-b border-b-black'>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LinksBox({ links }: { links: { text: string; link: string; }[] }) {
    return (
        <div className="flex flex-col gap-2 transition-all duration-300">
            {links.map((item, idx) => <Link className='font-normal uppercase hover:font-[600]' key={idx} href={item.link}>{item.text}</Link>)}
        </div>
    );
}