import { FC } from "react";
import HBox from "../../helpers/HBox";

import { CloudIcon, Link, Text } from "evergreen-ui";
import { useRecoilValue } from "recoil";
import { themeState } from "../../recoil/theme";

const BreadCrum: FC = () => {
    const theme = useRecoilValue(themeState);

    return (
        <HBox paddingY={20}>
            <Link href="#" verticalAlign="middle">
                <HBox>
                    <CloudIcon marginRight={4} color={theme.colors.textPrimary} />
                    <Text color={theme.colors.textPrimary}>Cloud</Text>
                </HBox>
            </Link>
            <Text paddingX={5} color={theme.colors.text}>/</Text>
            {/* <Link href="#">Company Name</Link> */}
        </HBox>
    );
}

export default BreadCrum;