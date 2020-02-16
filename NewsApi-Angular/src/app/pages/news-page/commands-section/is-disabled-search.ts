import { FormGroup, ValidationErrors } from '@angular/forms';


export const isDisabledSearchDirective = (
  control: FormGroup
): ValidationErrors | null => {
  const source = control.get('selectedSource').value;
  const input = control.get('inputQueryText').value;
  const my = control.get('onlyMy').value;
  return my || !!input || !!source ? { available: true } : null;
};
