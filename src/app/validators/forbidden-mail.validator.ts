import { FormControl, ValidationErrors } from "@angular/forms";

export function forbiddenMailValidator(control: FormControl): ValidationErrors | null{
	const forbiddenWord:string = "fork";
	const enteredValue:string = control.value || '';
	const hasForbidden: boolean = enteredValue.includes(forbiddenWord);

	return (hasForbidden) ? { badWord: "that's illegal" } : null;

}