import Image from "next/image";
import {Grid} from '@mantine/core';
import logoCompany from "../public/logo-company.png";
import youngWomanPreview from "../public/young-woman-preview.png";
import teethPic1 from "../public/teeth-pic-1.png";
import teethPic2 from "../public/teeth-pic-2.png";
import teethPic3 from "../public/teeth-pic-3.png";
import twoPeoplePhoto from "../public/two-people-photo.png";
import smilingWomanPhoto from "../public/woman-smiling.png";
import StepItem from "../components/StepItem";
import ActionSection from "../components/ActionSection";
import React from "react";

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
];

function Home() {

    return (
        <>
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
                            <h1 className={"text-4xl font-medium text-center leading-[44px]"}>Najrealistickejšie
                                estetické
                                ústne
                                rekonštrukcie v Bánskej Bystrici</h1>
                        </div>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col sm={12} lg={6}>
                        <button
                            className={"bg-primary-color text-white text-lg rounded-[10px] w-[170px] h-[60px] my-12 mx-auto"}>Objednať
                            sa
                        </button>
                    </Grid.Col>
                    <Grid.Col display={"none"} lg={6}>Garancia realistickej estetickej premeny Vášho chrupu</Grid.Col>
                </Grid>

                <div className={"w-full primary-shadow rounded-[10px] px-[38px] py-[26px]"}>
                    <p className={"text-xs uppercase font-semibold text-secondary-color mb-2"}>Tvoríme úsmevy, ktoré
                        menia
                        životy</p>
                    <p className={"text-xl font-semibold"}>Pacienti, pred a po rekonštrukcii chrupu na klinike
                        BELVEDENT</p>
                    <button
                        className={" bg-primary-color text-white text-lg rounded-[10px] w-[162px] h-[48px] my-12"}>Objednať
                        sa
                    </button>
                    <Image className={"mx-auto"} alt={"Image n.1"} src={teethPic1}/>
                    <Image className={"my-4 mx-auto"} alt={"Image n.2"} src={teethPic2}/>
                    <Image className={"mx-auto"} alt={"Image n.3"} src={teethPic3}/>

                </div>
                <div className={"w-4/6 ml-10 mb-7 mt-16"}>
                    <p className={"text-xs uppercase font-semibold text-secondary-color mb-2"}>Zákaznícka cesta</p>
                    <p className={"text-3xl font-semibold"}>Ako to celé funguje?</p>
                </div>
                <div className={"w-full primary-shadow rounded-[10px] px-[38px] py-[45px]"}>
                    {STEPS_INFO.map(item => (<StepItem order={item.order} text={item.text} title={item.title}/>))}
                </div>
            </div>
            <div className={"w-full h-[523px] relative bg-custom-gradient mt-3 pb-0"}>
                <Image
                    alt={"Photo of the team"}
                    src={twoPeoplePhoto}
                    fill
                />
            </div>
            <ActionSection/>
            <div className={"bg-primary-color py-[60px] px-4"}>
                <Grid className={"m-0"}>
                    <Grid.Col className={"pt-10"} lg={6}>
                        <Image className={"mx-auto"} alt={"Smiling woman"} src={smilingWomanPhoto}/>
                    </Grid.Col>
                    <Grid.Col></Grid.Col>
                    <Grid.Col lg={6}>
                        <div className={"bg-white px-[30px] py-[40px] rounded-[20px]"}>
                            <p className={"text-xs uppercase text-secondary-color font-semibold"}>Krok k lepšiemu životu</p>
                            <p className={"font-semibold text-xl mt-2 mb-10"}>Rezervujte si nezáveznú konzultáciu v klinike.</p>
                            <form action="submit">
                                <p>FORMULAR HERE</p>
                                <button className={"w-full bg-secondary-color rounded-[10px] py-[15px] mt-12 text-white font-medium text-base"}>Odoslať</button>
                            </form>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
            <ActionSection/>
            <div className={"px-4 py-10"}>
                <p className={"text-xs text-secondary-color font-semibold"}>Testimonials</p>
                <p className={"text-3xl font-semibold my-3 w-11/12"}>Naši spokojní zákazníci</p>
            </div>
        </>

    )
}

export default Home;