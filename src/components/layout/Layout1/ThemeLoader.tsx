import { FC, memo } from "react";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import { themeState } from "../../recoil/theme";

const ThemeLoader: FC = () => {
    const theme: any = useRecoilValue(themeState);

    return (
        <Helmet>
            <style>
                {`
                    body {
                        background-color: ${theme.customComponents?.body?.backgroundColor || 'inherit'};
                    }

                    .toolbar {
                        background-color: ${theme.customComponents?.toolbar?.backgroundColor || 'inherit'};
                    }

                    div[role="dialog"]{
                        background-color: ${theme.customComponents?.toolbar?.backgroundColor};
                    }

                    span {
                        color: ${theme.components?.Text.baseStyle?.color || 'inherit'} !important;
                    }
                `}
            </style>
        </Helmet>
    );
};

export default memo(ThemeLoader);