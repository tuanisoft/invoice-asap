import { FC } from "react";
import HBox from "../../helpers/HBox";

import { CloudIcon, Link, Text } from "evergreen-ui";

const BreadCrum: FC = () => {
    return (
        <HBox paddingY={20}>
            <Link href="#" verticalAlign="middle">
                <HBox>
                    <CloudIcon marginRight={4} />
                    Cloud
                </HBox>
            </Link>
            <Text paddingX={5}>/</Text>
            {/* <Link href="#">Company Name</Link> */}
        </HBox>
    );
}

export default BreadCrum;