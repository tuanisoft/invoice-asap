import { FC, MouseEventHandler } from "react";
import VBox from "../../helpers/VBox";
import { IFile } from "../../../models/files.model";

import {
    MoreIcon,
    FolderCloseIcon,
    Button,
    Heading,
    Menu,
    Pane,
    Popover,
    Text
} from "evergreen-ui";

type FileCardProps = {
    file: IFile;
    onContextMenu?: MouseEventHandler<HTMLElement> | undefined;
    onDelete?: (params: { id: string, fileName: string }) => void;
    onRename?: (params: { id: string, currentFileName: string }) => void;
};

const FileCard: FC<FileCardProps> = (props) => {
    const { file, onContextMenu, onRename, onDelete } = props;

    const handleRename = () => onRename && typeof onRename === "function" && onRename({ id: file.id || "nothing", currentFileName: file.name });

    const handleDelete = () => onDelete && typeof onDelete === "function" && onDelete({ id: file.id || "nothing", fileName: file.name });

    if (file.type === 'invoice') {
        return (
            <VBox border
                borderRadius={10}
                padding={20}
                onContextMenu={onContextMenu}>
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
            <Pane position="absolute" top={5} left={5} >
                <Popover
                    content={({ close }) => (
                        <Menu>
                            <Menu.Group>
                                {/* <Menu.Item intent="info" onClick={() => { close(); }}>Share...</Menu.Item> */}
                                {/* <Menu.Item intent="success" onClick={() => { close(); }}>Move...</Menu.Item> */}
                                <Menu.Item onClick={() => { close(); handleRename(); }}>Rename</Menu.Item>
                            </Menu.Group>
                            <Menu.Divider />
                            <Menu.Group>
                                <Menu.Item intent="danger" onClick={() => { close(); handleDelete(); }}>Delete</Menu.Item>
                            </Menu.Group>
                        </Menu>
                    )}
                >
                    <Button appearance="minimal" padding={0}>
                        <MoreIcon style={{ transform: "rotate(90deg)" }} size={24} />
                    </Button>
                </Popover>
            </Pane>
            <FolderCloseIcon size={100} color="orange500" />
            <Text>{file.name}</Text>
        </VBox>
    );
}

export default FileCard;