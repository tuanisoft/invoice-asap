import { FC, memo } from "react";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import { themeState } from "../../recoil/theme";

const ThemeLoader: FC = () => {
    const theme = useRecoilValue(themeState);

    return (
        <Helmet>
            <style>
                {`
                    body {
                        background-color: ${theme.colors.body};
                    }
                `}
            </style>
        </Helmet>
    );
};

export default memo(ThemeLoader);