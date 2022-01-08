
import React from 'react';

interface IPrimaryInput {
    errors?: any;
    placeholder?: string
    readonly?: boolean
    value?: string
    contentEditable?: boolean
}

const PrimaryInput = React.forwardRef<HTMLInputElement, IPrimaryInput>(({ ...props }, ref) => {

    
    return (
        <div>
            <input ref={ref} {...props} />
            <div>
                {props.errors?.message}
            </div>
        </div>
    );
});

PrimaryInput.displayName=""
export default PrimaryInput;

