import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';


function distinctValidator(compareValue: string | number, trim: boolean = true): ValidatorFn {
  return ({ value }: AbstractControl): ValidationErrors => {
    if(!value) {
      return null;
    }

    if(trim === true) {
      return value.trim() === compareValue ? { distinct: true } : null;
    } else {
      return value === compareValue ? { distinct: true } : null;
    }
  };
}

function passwordStrengthValidator({ value }: AbstractControl): ValidationErrors {
  if(!value) {
    return null;
  }

  let minMatches = 2;

  if(/[A-Z]/g.test(value) === true) {
    minMatches--;
  }

  if(/[a-z]/g.test(value) === true) {
    minMatches--;
  }

  if(/\d/g.test(value) === true) {
    minMatches--;
  }

  if(/\W/g.test(value) === true) {
    minMatches--;
  }

  if(minMatches > 0) {
    return { passwordStrength: true };
  } else { return null; }
}

const PASSWORD_VALIDATORS = [
  Validators.minLength(8),
  Validators.maxLength(50),
  passwordStrengthValidator,
  Validators.required,
];


export {
  distinctValidator,
  PASSWORD_VALIDATORS,
};
