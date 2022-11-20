import { Accordion } from '@mantine/core';
import React from 'react';

const AccordionItem: React.FC<{title: string, text: string}> =({title, text}) =>{
    return (
        <Accordion.Item value={title}>
            <Accordion.Control className={"text-lg font-medium"}>{title}</Accordion.Control>
            <Accordion.Panel>{text}</Accordion.Panel>
        </Accordion.Item>
    );
}

export default AccordionItem;