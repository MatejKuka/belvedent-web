import React from 'react';

function ActionSection() {
    return (
        <div className={"px-[20px] py-[30px] text-center bg-custom-gradient"}>
            <p className={"text-xs uppercase text-secondary-color font-semibold"}>Krok k lepšiemu životu</p>
            <p className={"text-xl text-white font-semibold"}>Objednajte sa na nezáveznú konzultáciu na klinike
                Belvedent</p>
            <button
                className={"bg-tertiary-color rounded-[10px] mt-2.5 px-[32px] py-[16px] text-lg font-semibold"}>Objednať
                sa
            </button>
        </div>
    );
}

export default ActionSection;