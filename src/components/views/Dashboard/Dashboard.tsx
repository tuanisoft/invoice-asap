import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Dashboard.scss';
import { onSnapshot } from 'firebase/firestore';

import BreadCrum from './BreadCrum';
import FileCard from './FileCard';
import { IFile } from '../../../models/files.model';
import { FilesService } from '../../../services/files.service';
import { AuthService } from '../../../services/auth.service';

// EVERGREEN COMPONENTS
import {
  AddToArtifactIcon,
  Button,
  Dialog,
  EditIcon,
  FolderNewIcon,
  Heading,
  Menu,
  Pane,
  Portal,
  Text,
  TextInputField,
  toaster,
  TrashIcon
} from 'evergreen-ui';

const Dashboard: FC = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [files, setFiles] = useState<IFile[]>([]);

  const [openNewFolderDialog, setOpenNewFolderDialog] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteFile, setDeleteFile] = useState<{ id: string, fileName: string }>({ id: '', fileName: '' });

  const [openRenameDialog, setOpenRenameDialog] = useState(false);
  const [renameFile, setRenameFile] = useState<{ id: string, newFileName: string }>({ id: '', newFileName: '' });

  useEffect(() => {
    const fetchFolders = onSnapshot(FilesService.getMyFolders(), {
      next: snapshot => {
        setFiles(snapshot.docs.map(doc => {
          const data = doc.data();
          data.id = doc.id;
          return data as IFile;
        }));
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
    return fetchFolders;
  }, []);

  const handleOpenCreateNewFolderDialog = () => {
    setNewFolderName('');
    setOpenNewFolderDialog(true);
  };
  const handleCreateNewFolder = (close: () => void) => {
    const folder: IFile = {
      name: newFolderName,
      type: 'folder',
      parent: 'root',
      createdAt: new Date(),
      owner: AuthService.GetSession()?.uid || ''
    };
    FilesService.createFolder(folder).then(() => {
      toaster.success(`Folder ${folder.name} created`, { duration: 3, hasCloseButton: false });
      close();
    }).catch(() => {
      toaster.danger('Folder creation failed', { duration: 3, hasCloseButton: false });
    });
  };

  const handleOpenRenameDialog = (params: { id: string, currentFileName: string }) => {
    setOpenRenameDialog(true);
    setRenameFile({ id: params.id, newFileName: params.currentFileName });
  };
  const handleRenameFile = (close: () => void) => {
    close();
    FilesService.renameItem(renameFile.id, renameFile.newFileName).then(() => {
      toaster.success(`File ${renameFile.newFileName} renamed`, { duration: 3, hasCloseButton: false });
    }).catch(() => {
      toaster.danger('File rename failed', { duration: 3, hasCloseButton: false });
    });
  };
  const handleTextChangeNewName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRenameFile({ ...renameFile, newFileName: value });
  };

  const handleOpenDeleteDialog = (params: { id: string, fileName: string }) => {
    setOpenDeleteDialog(true);
    setDeleteFile(params);
  };
  const handleDeleteFile = (close: () => void) => {
    close();
    FilesService.delete(deleteFile.id).then(() => {
      toaster.success(`File ${deleteFile.fileName} deleted`, { duration: 3, hasCloseButton: false });
    }).catch(() => {
      toaster.danger('File deletion failed', { duration: 3, hasCloseButton: false });
    });
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'newFolderName') {
      setNewFolderName(value);
    }
  };

  // const handleContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   e.preventDefault();
  //   setAnchorPoint({ x: e.clientX, y: e.clientY });
  // };
  const handleContextMenuItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setAnchorPoint({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="Dashboard">
      <Heading size={800}>
        Dashboard
        <Button marginLeft={10} size="small" appearance="primary" intent="warning" iconBefore={FolderNewIcon}
          onClick={handleOpenCreateNewFolderDialog}>
          New Folder
        </Button>

        <Button marginLeft={10} size="small" appearance="primary" intent="success" iconBefore={AddToArtifactIcon}
          is={RouterLink} to="/invoice/new">
          Add Invoice
        </Button>
      </Heading>

      <BreadCrum />

      <Portal>
        <Pane
          display="none"
          borderRadius={5}
          padding={0}
          position="fixed"
          top={anchorPoint.y}
          left={anchorPoint.x}
          zIndex={999}
          backgroundColor="white"
          boxShadow="rgb(67 90 111 / 30%) 0px 0px 1px, rgb(67 90 111 / 47%) 0px 8px 10px -4px"
        >
          <Menu>
            <Menu.Group>
              <Menu.Item icon={FolderNewIcon}>Create new folder</Menu.Item>
              <Menu.Item icon={AddToArtifactIcon}>New invoice</Menu.Item>
              <Menu.Item icon={EditIcon}>Rename</Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={TrashIcon} intent="danger">
                Delete
              </Menu.Item>
            </Menu.Group>
          </Menu>
        </Pane>
      </Portal>

      <div className="invoices-pane">
        {
          files.map((item, index) => {
            return (
              <FileCard
                file={item}
                key={index}
                onContextMenu={handleContextMenuItem}
                onRename={handleOpenRenameDialog}
                onDelete={handleOpenDeleteDialog} />
            );
          })
        }
      </div>

      <Dialog
        isShown={openNewFolderDialog}
        title="Create a new folder"
        onConfirm={handleCreateNewFolder}
        onCloseComplete={() => setOpenNewFolderDialog(false)}
        confirmLabel="Create"
      >
        <TextInputField label="Folder Name" name="newFolderName" onChange={handleTextChange} value={newFolderName} placeholder="My Own Folder Name" />
      </Dialog>

      <Dialog
        isShown={openRenameDialog}
        title="Rename a file"
        intent="danger"
        onCloseComplete={() => setOpenRenameDialog(false)}
        onConfirm={handleRenameFile}
        confirmLabel="Rename"
      >
        <TextInputField label="New Folder Name" name="newName" onChange={handleTextChangeNewName} value={renameFile.newFileName} placeholder="A New Folder Name" />
      </Dialog>

      <Dialog
        isShown={openDeleteDialog}
        title="Delete a file"
        intent="danger"
        onCloseComplete={() => setOpenDeleteDialog(false)}
        onConfirm={handleDeleteFile}
        confirmLabel="Delete"
      >
        <Text>
          {`Are you sure you want to delete ${deleteFile.fileName}?`}
        </Text>
      </Dialog>
    </div >
  )
};

export default Dashboard;
