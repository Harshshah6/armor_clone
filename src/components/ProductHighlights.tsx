import Image from 'next/image'
import React from 'react'
import Chip from './ui/Chip'

function ProductHighlights() {
    return (
        <div className='flex flex-col gap-14 w-full'>
            <ProductChip
                title='IMMERSIVE AUDIO'
                chips={["50mm driver", "Neodymium", "105 db"]}
                span="7.1 Surround Sound"
                description="As the name suggests, surround sound makes it feel like the audio's coming from all around you—not just left and right. You'll catch the subtle details, background sounds, and every little moment like you're right in the middle of it."
                imageUrl="https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/5652b67d-2dc4-4302-a8cb-1772d38254cc"
                isOdd
            />
            <ProductChip
                title="MIC'D RIGHT"
                chips={["Detachable", "Unidirectional"]}
                span="Detachable Microphone"
                description="The mic blocks out background sound and focuses on just your voice. Its unidirectional design keeps distractions away, and the detachable feature makes it super convenient when you need it. Whether you're on a call, streaming, or recording, this mic makes sure you sound crystal clear every time."
                imageUrl="https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/79cd01cc-7f13-43cf-9ebb-ef9588b000e1"
            />

            <ProductChip
                title="CLOUD CUSHION"
                chips={["Foam", "Detachable", "Mesh Lining"]}
                span="Fabric Earcups"
                description="Made with breathable fabric, these earcups stay cool, resist wear, and feel soft —even through long hours of use. No peeling, no overheating—just comfort."
                imageUrl="https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/63dcebce-b4c3-4ace-ab0b-b597d445dd84"
                isOdd
            />

            <ProductChip
                title="CONTROL HUB"
                chips={["Volume", "LED", "EQ", "MIC",]}
                span="In-line Audio Controller"
                description="Our in-line controller lets you adjust volume with a smooth knob, toggle the mic on/off instantly, switch EQ modes based on what you're playing, and even change the LED colours of the loop lights— all in one compact unit, that's weirdly satisfying to use."
                imageUrl="https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/ddc4a506-831d-430c-9071-cec05c7e564b"
            />

            <ProductChip
                title="CAREFULLY CURATED"
                chips={["Color", "Material", "Finish",]}
                span="Design Choices"
                description="Bored of black and blue? So were we. That's why we picked colors you've probably never seen on headphones before. A little louder, a little bolder—because safe is boring, and these aren't meant to blend in."
                imageUrl="https://assets.replocdn.com/projects/199319aa-f908-4d9e-95bb-f0464fa8cf57/e8999f98-54dd-4b4e-9336-e118215727cf"
                isOdd
            />

        </div>
    )
}

type ProductChipProps = {
    title: string;
    chips: string[];
    span: string;
    description: string;
    imageUrl: string;
    isOdd?: boolean;
};

function ProductChip({ title, chips, description, imageUrl, span, isOdd = false }: ProductChipProps) {
    return (
        <div className={`p-6 border-2 rounded mx-5 w-fit flex flex-col md:flex-row ${isOdd ? "" : "flex-col-reverse md:flex-row-reverse"} gap-4`}>
            <div className='md:flex-1 flex flex-col justify-between'>
                <h1 className='text-4xl md:text-5xl'><strong>{title}</strong></h1>
                <div className='flex flex-wrap gap-2 mt-5'>
                    {chips.map((item, idx) => <Chip key={idx} text={item} />)}
                </div>
                <p className='text-3xl mt-10'>{span.substring(0, span.lastIndexOf(" "))} <span className='text-accent'>{span.substring(span.lastIndexOf(" "))}</span></p>
                <p className='mt-5'>
                    {description}
                </p>
            </div>
            <div className='w-full min-h-[40vh] md:flex-[1.5] relative rounded overflow-hidden'>
                <Image
                    src={imageUrl}
                    fill
                    alt='product_image'
                    className='aspect-video! object-cover'
                />
            </div>
        </div>
    );
}

export default ProductHighlights
