import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

export interface FormData {
  name: string;
  email: string;
  birthDate: string;
  gender: string;
  hobbies: string[]; // selección múltiple
  country: string;
  comments: string;
  newsletter: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private firestore: Firestore) {}

  saveFormData(data: FormData) {
    const formCollection = collection(this.firestore, 'formData');
    return addDoc(formCollection, data);
  }
}
