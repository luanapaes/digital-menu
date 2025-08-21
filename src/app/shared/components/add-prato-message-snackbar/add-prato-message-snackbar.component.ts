import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-prato-message-snackbar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './add-prato-message-snackbar.component.html',
  styleUrl: './add-prato-message-snackbar.component.scss'
})
export class AddPratoMessageSnackbarComponent {
  durationInSeconds = 3;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
}
