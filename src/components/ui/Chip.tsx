export default function Chip({ text }: { text: string }) {
    return (
        <div className='cursor-pointer px-3 py-1 border rounded-full w-fit'>
            <p className='font-light text-border text-[.85rem]'>{text}</p>
        </div>
    );
}