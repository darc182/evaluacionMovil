import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormService, FormData } from '../services/form.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgIf],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  formData: FormData = {
    name: '',
    email: '',
    birthDate: '',
    gender: '',
    hobbies: [],
    country: '',
    comments: '',
    newsletter: false
  };

  constructor(private formService: FormService) {}

  submitForm() {
    this.formService.saveFormData(this.formData)
      .then(() => {
        alert('Datos guardados con éxito');
        this.formData = {
          name: '',
          email: '',
          birthDate: '',
          gender: '',
          hobbies: [],
          country: '',
          comments: '',
          newsletter: false
        };
      })
      .catch(err => {
        console.error(err);
        alert('Error al guardar los datos');
      });
  }
}
