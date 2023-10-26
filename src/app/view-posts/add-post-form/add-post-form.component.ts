import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent {
  imagePreview: string = ''

  addPostForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    subTitle: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(null)
  })

  onImageUpload (event: Event): void {
    const files: FileList | null = (event.target as HTMLInputElement).files
    const file = files !== null ? files[0] : null
    this.addPostForm.patchValue({ image: file })
    this.addPostForm.controls['image'].updateValueAndValidity()
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
    reader.readAsDataURL(file!)
  }
}
