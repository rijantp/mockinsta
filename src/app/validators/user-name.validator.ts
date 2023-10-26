import { FormControl, ValidationErrors } from "@angular/forms";

const prohibitedNames:string[]=['Rijan','Abeen']

export function userNameValidator (control:FormControl){
    let error:ValidationErrors|null=null;
    prohibitedNames.forEach((name:string)=>{
        if(name.toLowerCase()===control.value.toLowerCase()) error={prohibitedName:true}
    })
    return error
}