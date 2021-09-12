import { FC } from 'react';
import { Pane, PaneProps } from 'evergreen-ui';

const VBox: FC<PaneProps> = (props) => {
    const { children } = props;
    return (
        <Pane
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="start"
            {...props}
        >
            {children}
        </Pane>
    );
};

export default VBox;