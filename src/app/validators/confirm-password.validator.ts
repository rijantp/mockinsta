import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function confirmPasswordValidator(forms:AbstractControl):ValidationErrors|null{
    const form= forms as FormGroup
    const password=form.controls['password'].value;
    const confirmPassword=form.controls['confirmPassword'].value;
    let error=null;
    if(password && confirmPassword && password!==confirmPassword){
        // console.log(password);
        // console.log(confirmPassword);
        
        error= {noMatch:true}
    }
    console.log(error);
    
    return error
    
}