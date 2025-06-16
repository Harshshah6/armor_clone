import React from 'react'
import FAQItem from './ui/FAQItem'

const FAQItems = [
    {
        title: "What type of audio drivers do these headphones use?",
        description: "The Armor Version.H1 is equipped with 50mm Neodymium drivers."
    },
    {
        title: "Does this headset support 7.1 surround sound?",
        description: "Yes, the <strong>Armor Version.H1</strong> features a dedicated <strong>7.1 Surround Sound</strong>, delivering immersive, positional audio for a competitive gaming advantage."
    },
    {
        title: "Where is the product manufactured?",
        description: "The country of origin is China."
    },
    {
        title: "How does the RGB Light Effect work?",
        description:
            `The <strong>RGB Light Effect Button</strong> allows you to customize the lighting on your headphones for a dynamic gaming experience.
            <ul style='margin-left: 22px; list-style: disc;'>
            <li><strong>Single press to cycle through different RGB colors.</strong></li>
            <li><strong>Long press to turn the lights off.</strong></li>
            <li><strong>Single press again to turn the lights back on.</strong></li>
            </ul>`
    },
    {
        title: "What type of microphone does this headset have?",
        description: "It comes with a detachable noise-cancelling microphone designed to reduce background noise."
    },
    {
        title: "What is the connectivity type of these headphones?",
        description: "The <strong>Armor Version.H1</strong> features a <strong>USB Type-C connector</strong> for seamless, high-speed audio transmission. Additionally, the package includes a <strong>USB-C to USB-A adapter</strong>, ensuring compatibility with a wider range of devices."
    },
    {
        title: "Are the ear cushions replaceable?",
        description: "Yes, the ear cushions are <strong>replaceable.</strong>"
    },
    {
        title: "What is the cable length?",
        description: "The included <strong>braided cable is 2.5 meters long</strong>"
    },
    {
        title: "Are these headphones compatible with all devices?",
        description: "<strong>The Armor Wired Gaming Headphones are compatible with PC, Laptop, and Game Consoles. (Mic may not work on certain consoles)</strong>"
    },
    {
        title: "Does it come with software for customization?",
        description: "Yes, our <strong>dedicated software</strong> allows you to fine-tune <strong>EQ settings, and 7.1 surround sound</strong>. Will be available shortly."
    },
    {
        title: "Is there a warranty on the headphones?",
        description: "Yes, the Headphones come with a <strong>1-year warranty</strong> covering manufacturing defects."
    },
];

function FAQ() {
    return (
        <div className='px-5 flex flex-col gap-4 '>
            {FAQItems.map((item, idx) => (
            <FAQItem
                    key={idx}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    )
}

export default FAQ
