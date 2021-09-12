import { ChangeEvent, FC, useEffect, useState } from 'react';
import './Dashboard.scss';
// import { OriginStorageClient } from 'origin-storage';
import BreadCrum from './BreadCrum';
import FileCard from './FileCard';
import { FilesService } from '../../../services/files.service';
import { onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore';

// EVERGREEN COMPONENTS
import {
  AddToArtifactIcon,
  Button,
  Dialog,
  FolderNewIcon,
  Heading,
  TextInputField,
  toaster
} from 'evergreen-ui';
import { IFile } from '../../../models/files.model';
import { AuthService } from '../../../services/auth.service';

const Dashboard: FC = () => {
  const [folders, setFolders] = useState<QuerySnapshot<DocumentData>>();
  const [openNewFolderDialog, setOpenNewFolderDialog] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  useEffect(() => {
    const fetchFolders = onSnapshot(FilesService.getMyFolders(), {
      next: snapshot => {
        setFolders(snapshot);
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

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'newFolderName') {
      setNewFolderName(value);
    }
  };

  return (
    <div className="Dashboard">
      <Heading size={800}>
        Dashboard
        <Button marginLeft={10} size="small" appearance="primary" intent="warning" iconBefore={FolderNewIcon}
          onClick={handleOpenCreateNewFolderDialog}>
          New Folder
        </Button>

        <Button marginLeft={10} size="small" appearance="primary" intent="success" iconBefore={AddToArtifactIcon}>
          Add Invoice
        </Button>
      </Heading>

      <BreadCrum />

      <div className="invoices-pane">
        {
          folders?.docs.map((folder, index) => {
            const item = folder.data() as IFile;
            return (
              <FileCard key={index} folder={item} />
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
        <TextInputField label="Folder Name" name="newFolderName" onChange={handleTextChange} placeholder="My Own Folder Name" />
      </Dialog>

    </div>
  )
};

export default Dashboard;
