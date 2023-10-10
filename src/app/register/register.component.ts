import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'register',
  template: `
      <mat-card>
            <mat-card-title>Register</mat-card-title>
      <mat-card-content>
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field>
              <input type="text" matInput placeholder="nom" formControlName="nom">
            </mat-form-field>
          </p>

          <p>
            <mat-form-field>
              <input type="text" matInput placeholder="prénom" formControlName="prénom">
            </mat-form-field>
          </p>

          <p>
            <mat-form-field>
              <input type="password" matInput placeholder="mot de passe" formControlName="mot de passe">
            </mat-form-field>
          </p>

          <p *ngIf="error" class="error">
            {{ error }}
          </p>

          <div class="button-container">

            <div class="buttonLeft">
              <button type="submit" mat-button><a href="login">déjà s'inscrit</a></button>
            </div>

            <div class="buttonRight">
              <button type="submit" mat-button>S'inscrire</button>
            </div>

          </div>

        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 100px 0px;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      .error {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }

      .button-container {
        display: flex;
        justify-content: space-between;
      }

      .buttonLeft {
        display: flex;
        flex: 1;
        justify-content: flex-start;
      }

      .buttonRight {
        display: flex;
        flex: 1;
        justify-content: flex-end;
      }
      
    `,
  ],

})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
