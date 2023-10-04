import { memo } from 'react';

function Button({ text, textColor, bgColor, IconAfter, onClick }) {
    console.log('re-render');
    return (
        <button
            className={`py-2 px-4 ${textColor} ${bgColor} outline-none rounded-md hover:underline text-base uppercase flex items-center gap-1`}
            type="button"
            onClick={onClick}
        >
            {text}
            {IconAfter && <IconAfter />}
        </button>
    );
}

export default memo(Button);
