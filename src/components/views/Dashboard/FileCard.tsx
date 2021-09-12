import { FC } from "react";
import VBox from "../../helpers/VBox";
import { IFile } from "../../../models/files.model";

import { FolderCloseIcon, Heading, Text } from "evergreen-ui";

interface FileCardProps {
    folder: IFile;
};

const FileCard: FC<FileCardProps> = (props) => {
    const { folder } = props;

    if (folder.type === 'invoice') {
        return (
            <VBox border
                borderRadius={10}
                padding={20}>
                <Heading size={900} marginBottom={5}>$500</Heading>
                <Text size={600} marginBottom={5}>Your Company</Text>
                <Text color="gray">Aug, 9 2021</Text>
            </VBox>
        );
    }

    return (
        <VBox border
            borderRadius={10}
            padding={20}
            cursor="pointer">
            <FolderCloseIcon size={100} color="orange500" />
            <Text color="gray">{folder.name}</Text>
        </VBox>
    );
}

export default FileCard;