import { memo } from 'react';

function Button({ text, textColor, bgColor, IconAfter, onClick, fullWidth }) {
    console.log('re-render');
    return (
        <button
            className={`py-2 px-4 ${textColor} ${bgColor} ${
                fullWidth && 'w-full'
            } outline-none rounded-md hover:underline text-base uppercase flex items-center justify-center gap-1`}
            type="button"
            onClick={onClick}
        >
            <span>{text}</span>
            <span>{IconAfter && <IconAfter />}</span>
        </button>
    );
}

export default memo(Button);
