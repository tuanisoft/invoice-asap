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
                        background-color: ${theme.customComponents?.body?.backgroundColor};
                    }

                    .toolbar {
                        background-color: ${theme.customComponents?.toolbar?.backgroundColor};
                    }

                    div[role="dialog"]{
                        background-color: ${theme.customComponents?.body?.backgroundColor};
                    }

                    span.ub-color_474d66{
                        color: ${theme.components?.Text?.baseStyle?.color};
                    }

                    span {
                        color: ${theme.components?.Text?.baseStyle?.color};
                    }
                `}
            </style>
        </Helmet>
    );
};

export default memo(ThemeLoader);