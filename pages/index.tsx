import Image from "next/image";
import {Grid} from '@mantine/core';
import logoCompany from "../public/logo-company.png";
import youngWomanPreview from "../public/young-woman-preview.png";
import teethPic1 from "../public/teeth-pic-1.png";
import teethPic2 from "../public/teeth-pic-2.png";
import teethPic3 from "../public/teeth-pic-3.png";

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
                        <h1 className={"text-4xl font-medium text-center leading-[44px]"}>Najrealistickejšie estetické ústne
                            rekonštrukcie v Bánskej Bystrici</h1>
                    </div>
                </Grid.Col>
            </Grid>
            <button
                className={"bg-primary-color text-white text-lg rounded-[10px] w-[170px] h-[60px] my-12 mx-auto"}>Objednať
                sa
            </button>
            <div className={"w-full primary-shadow rounded-[10px] px-[38px] py-[26px]"}>
                <p className={""}>Tvoríme úsmevy, ktoré menia životy</p>
                <p className={""}>Pacienti, pred a po rekonštrukcii chrupu na klinike BELVEDENT</p>
                <Image alt={"Image n.1"} src={teethPic1}/>
                <Image alt={"Image n.2"} src={teethPic2}/>
                <Image alt={"Image n.3"} src={teethPic3}/>
            </div>
        </div>
    )
}
