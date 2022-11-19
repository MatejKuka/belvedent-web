import React from 'react';
import {Divider} from '@mantine/core';

const StepItem: React.FC<{title: string, text: string, order: number}> =({title, text, order}) =>{
    return (
        <>
            <div className={"py-[10px] px-[20px] hover:bg-tertiary-color rounded-xl"}>
                <p className={"mb-8 text-2xl font-bold text-secondary-color"}>
                <span
                    className={"bg-tertiary-color px-3.5 py-2 rounded-full mr-2"}>{order.toString()}</span>
                    {title}
                </p>
                <p>{text}</p>
            </div>
            {order < 6 && (<Divider my="lg" className={"my-9"}/>)    }
        </>

    );
}

export default StepItem;