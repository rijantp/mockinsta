import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subject, Subscription,  interval, takeUntil} from 'rxjs';
import { confirmPasswordValidator } from 'src/app/validators/confirm-password.validator'
import { userNameValidator } from 'src/app/validators/user-name.validator'

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {

  sub!:Subscription;
  suj:Subject<void>=new Subject();

  public addUserForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, userNameValidator]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  },{validators:[confirmPasswordValidator]});

  ngOnInit(): void {
    interval().pipe(takeUntil(this.suj)).subscribe(value=>console.log(value))
      this.addUserForm.controls['confirmPassword'].valueChanges.subscribe({
        next:()=>{
        //   console.log(
        //   this.addUserForm.errors)
        // }
      }})
  }

}
