import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent {
  public addPostForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subTitle: new FormControl(''),
    description: new FormControl('')
  })
}
