import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import { app } from "../core";

const storage: FirebaseStorage = getStorage(app);

export enum folders {
  projects = "projects",
  authors = "authors",
}

export enum projectImages {
  cover = "cover",
  preview = "preview",
}

class ImagesStorage {
  static async uploadProjectData(
    idProject: string,
    url: string,
    name: projectImages,
  ) {
    if (url.includes("firebase")) return url;
    
    const reference = ref(storage, `${folders.projects}/${idProject}/${name}`);
    const response = await fetch(url);
    const blob = await response.blob();
    await uploadBytes(reference, blob, {
      contentType: blob.type,
    });

    return getDownloadURL(reference);
  }

  static async uploadProjectAuthor(
    idProject: string,
    url: string,
    id: string,
  ) {
    if (url.includes("firebase")) return url;

    const reference = ref(storage, `${folders.projects}/${idProject}/${folders.authors}/${id}`);
    const response = await fetch(url);
    const blob = await response.blob();
    await uploadBytes(reference, blob, {
      contentType: blob.type,
    });

    return getDownloadURL(reference);
  }
}

export { ImagesStorage };
