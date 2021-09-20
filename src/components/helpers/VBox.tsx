import React from 'react';
import { Pane, PaneProps } from 'evergreen-ui';

const VBox: React.FC<PaneProps> = (props) => {
    const { children } = props;
    return (
        <Pane
            display="flex"
            position="relative"
            flexDirection="column"
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="center"
            width="100%"
            {...props}
        >
            {children}
        </Pane>
    );
};

export default VBox;