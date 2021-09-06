import React from "react";

import { Heading, Text } from "evergreen-ui";
import VBox from "../../helpers/VBox";

const InvoiceCard: React.FC = () => {
    return (
        <VBox border
            borderRadius={10}
            padding={20}>
            <Heading size={900} marginBottom={5}>$400</Heading>
            <Text size={600} marginBottom={5}>Your Company</Text>
            <Text color="gray">Aug, 9 2021</Text>
        </VBox>
    );
}

export default InvoiceCard;