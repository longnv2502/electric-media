import {Component, OnInit} from '@angular/core';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {MyUploadAdapter} from "../../../shared/adapter/my-upload.adapter";
import {SweetAlertProvider} from "../../../shared/provider/sweet-alert.provider";
import {SweetToastProvider} from "../../../shared/provider/sweet-toast.provider";

@Component({
  selector: 'adm-users-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  title = 'angular';
  public Editor = ClassicEditor;

  constructor(private sweetAlertProvider: SweetAlertProvider,
              private sweetToastProvider: SweetToastProvider) {
  }

  ngOnInit(): void {
    // this.sweetAlertProvider.confirm({
    //   title: 'Test',
    //   text: 'Test',
    // }).then()
    this.sweetToastProvider.info('Hello, World')
  }


  onReady(editor: ClassicEditor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  }


}
