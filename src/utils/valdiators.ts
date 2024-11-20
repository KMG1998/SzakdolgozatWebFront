import {number, string} from "yup"

class Validators {
  private readonly translate
  private readonly phoneRegExp = '^\\+\\d{2,3}\\s\\(?\\d{2,3}\\)?\\s\\d{3}\\s\\d{4}$'
  constructor(translator) {
    this.translate = translator
  }

  public emailValidator = () => string().required(this.translate('inputValidation.requiredField'))
    .email(this.translate('inputValidation.formatError'))

  public passwordValidator = () => string().required(this.translate('inputValidation.requiredField'))
    .min(8, this.translate('inputValidation.minLength', {length: '8'}))

  public phoneValidator = () => string().required(this.translate('inputValidation.requiredField'))
    .trim()
    .matches(this.phoneRegExp,this.translate('inputValidation.phoneFormat'))

  public minAmount = (minAmount: number) => number().required(this.translate('inputValidation.requiredField'))
    .min(minAmount, this.translate('inputValidation.minValue', {minValue: minAmount}))

  public required = () => string().required

  public minLength = (minLength: number) => string().required(this.translate('inputValidation.requiredField'))
    .min(minLength,this.translate('inputValidation.minLength', {length: minLength}))

}


export default Validators
