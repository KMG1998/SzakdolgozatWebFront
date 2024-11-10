import {string} from "yup"

class Validators {
  translate

  constructor(translator) {
    this.translate = translator
  }

  public emailValidator = () => string().required(this.translate('inputValidation.requiredField')).email(this.translate('inputValidation.formatError'))

  public passwordValidator = () => string().required(this.translate('inputValidation.requiredField')).min(8, this.translate('inputValidation.minLength',{ length: '8' }))
}


export default Validators
