import { addDoc, query, where, orderBy } from 'firebase/firestore';
import { AuthService } from "../services/auth.service";
import { IFile, FilesCollection } from '../models/files.model';

const uid = AuthService.GetSession()?.uid || 'without_owner';

export const FilesService = {
    createFolder(data: IFile) {
        console.log(data);
        return addDoc(FilesCollection, data);
    },
    getMyFolders() {
        return query(FilesCollection, where('owner', '==', uid), orderBy('name', 'asc'));
    }
};
