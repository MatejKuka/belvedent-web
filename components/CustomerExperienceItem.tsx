import Image from "next/image";
import {Grid} from "@mantine/core";

const CustomerExperienceItem: React.FC<{name: string, source: string, text: string, photoURL: string}> =
    ({name, source, text, photoURL}) =>{
    return (
        <div className={"bg-amber-300"}>
            <Grid>
                <Grid.Col span={3}>
                    <Image
                        alt={"Customer photo"}
                        src={photoURL}
                        width={66}
                        height={66}
                    />
                </Grid.Col>
                <Grid.Col span={9}>
                    <p>STARS HERE</p>
                    <p>{name}</p>
                    <p>{source}</p>
                </Grid.Col>
            </Grid>
            <p>" {text} "</p>
        </div>
    );
}

export default CustomerExperienceItem;