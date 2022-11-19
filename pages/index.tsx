import Image from "next/image";
import {Grid} from '@mantine/core';
import logoCompany from "../public/logo-company.png";
import youngWomanPreview from "../public/young-woman-preview.png";
import teethPic1 from "../public/teeth-pic-1.png";
import teethPic2 from "../public/teeth-pic-2.png";
import teethPic3 from "../public/teeth-pic-3.png";
import StepItem from "../components/StepItem";

const STEPS_INFO = [
    {
        title: "Objednať",
        text: "Úvodná konzultácia na ktorej zhodnotíme vaše potreby a možnosti",
        order: 1,
    },
    {
        title: "Sanácia",
        text: "V prípade potreby opravy zubov, respektíve vytiahnutie nepotrebných zubov",
        order: 2,
    },
    {
        title: "Meranie",
        text: "Odobratie odtlačkov alebo skenov, fotenie a iné protetické merania pre zhotovenie dočasných náhrad",
        order: 3,
    },
    {
        title: "Skúška",
        text: "Aplikovanie skúšobných zubov a kalibrácia podľa potrieb stability náhrady",
        order: 4,
    },
    {
        title: "Výroba protetickej práce",
        text: "Finálna preparácia a sken, podľa ktorých zubný technik vyrába finálnu prácu",
        order: 5,
    },
    {
        title: "Lepenie náhrady",
        text: "Adaptácia finálnej práce, jej posledné schválenie pacientom, izolácia zubov a nacementovanie náhrad",
        order: 6,
    },
]

export default function Home() {

    return (
        <div className={"mx-4 mt-8"}>
            <Image
                className={"mx-auto mb-14"}
                alt={"Logo of company"}
                src={logoCompany}
            />
            <Grid>
                <Grid.Col lg={6}>
                    <div className={"relative w-full h-[200px]"}>
                        <Image
                            alt={"dfs"}
                            fill
                            src={youngWomanPreview}
                            className={"mx-auto"}/>
                    </div>
                </Grid.Col>
                <Grid.Col lg={6}>
                    <div>
                        <Grid className={"mb-5 rounded-[50px] bg-tertiary-color w-[282px] mx-auto"}>
                            <Grid.Col span={5}>
                                <p className={"py-2 rounded-[20px] text-another-color font-semibold  w-full text-center bg-secondary-color text-sm"}>Garantujeme</p>
                            </Grid.Col>
                            <Grid.Col span={7}>
                                <p className={"text-xs font-semibold text-tertiary-color"}>Realistickú estetickú
                                    premenu vášho chrupu</p>
                            </Grid.Col>
                        </Grid>
                        <h1 className={"text-4xl font-medium text-center leading-[44px]"}>Najrealistickejšie estetické
                            ústne
                            rekonštrukcie v Bánskej Bystrici</h1>
                    </div>
                </Grid.Col>
            </Grid>
            <button
                className={"bg-primary-color text-white text-lg rounded-[10px] w-[170px] h-[60px] my-12 mx-auto"}>Objednať
                sa
            </button>
            <div className={"w-full primary-shadow rounded-[10px] px-[38px] py-[26px]"}>
                <p className={"text-xs uppercase font-semibold text-secondary-color mb-2"}>Tvoríme úsmevy, ktoré menia
                    životy</p>
                <p className={"text-xl font-semibold"}>Pacienti, pred a po rekonštrukcii chrupu na klinike BELVEDENT</p>
                <button
                    className={"bg-primary-color text-white text-lg rounded-[10px] w-[162px] h-[48px] my-12 mx-auto"}>Objednať
                    sa
                </button>
                <Image alt={"Image n.1"} src={teethPic1}/>
                <Image className={"my-4"} alt={"Image n.2"} src={teethPic2}/>
                <Image alt={"Image n.3"} src={teethPic3}/>
            </div>
            <div className={"w-4/6 mx-auto mb-7 mt-16"}>
                <p className={"text-xs uppercase font-semibold text-secondary-color mb-2"}>Zákaznícka cesta</p>
                <p className={"text-3xl font-semibold"}>Ako to celé funguje?</p>
            </div>
            <div className={"w-full primary-shadow rounded-[10px] px-[38px] py-[45px]"}>
                {STEPS_INFO.map(item => (<StepItem order={item.order} text={item.text} title={item.title}/>))}

            </div>

        </div>
    )
}
