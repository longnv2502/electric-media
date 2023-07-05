import { Component } from '@angular/core';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  title = 'angular';
  public Editor = ClassicEditor;
}
