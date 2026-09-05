import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');
      console.log('Saved form data:', savedForm);
      if (savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;
        setTimeout(() => {
          this.form().form.get('email')?.setValue(savedEmail);
        });
      }

      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => {
          if (value.email) {
            window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }));
          }
        },
      });

      this.destroyRef.onDestroy(() => {
        subscription?.unsubscribe();
      });
    });
  }



  onSubmit(formData: NgForm) {
    console.log(formData);
    if (formData.form.invalid) {
      return;
    }
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log('Email:', enteredEmail);
    console.log('Password:', enteredPassword);
    formData.reset();
  }
}
