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
  FolderNewIcon,
  Heading,
  TextInputField,
  toaster
} from 'evergreen-ui';

const Dashboard: FC = () => {
  const [files, setFiles] = useState<IFile[]>([]);
  const [openNewFolderDialog, setOpenNewFolderDialog] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  useEffect(() => {
    const fetchFolders = onSnapshot(FilesService.getMyFolders(), {
      next: snapshot => {
        setFiles(snapshot.docs.map(doc => {
          const data = doc.data();
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

        <Button marginLeft={10} size="small" appearance="primary" intent="success" iconBefore={AddToArtifactIcon}
          is={RouterLink} to="/invoice/new">
          Add Invoice
        </Button>
      </Heading>

      <BreadCrum />

      <div className="invoices-pane">
        {
          files.map((item, index) => {
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
