import { collection } from "firebase/firestore";
import { db } from "../fire.instance";
// import { AuthService } from "../services/auth.service";

export interface IFile {
    parent: string;
    type: "invoice" | "folder";
    name: string;
    invoice?: Object | undefined;
    invoiceNumber?: string | undefined;
    invoiceAmount?: number | undefined;
    invoiceStatus?: string | undefined;
    createdAt: Date;
    owner: string;
};

// const uid = AuthService.GetSession()?.uid || 'without_owner';
// export const OwnerDoc = doc(db, `users/${uid}`);

export const FilesCollection = collection(db, 'files');
