import {date, number, string} from "yup"
import i18n from "@/utils/lang";

class Validators {
  private readonly phoneRegExp = '^\\+\\d{2,3}\\s\\(?\\d{2,3}\\)?\\s\\d{3}\\s\\d{4}$'



  public emailValidator = () => string().trim().required(i18n.global.t('inputValidation.requiredField'))
    .email(i18n.global.t('inputValidation.formatError'))

  public passwordValidator = () => string().trim().required(i18n.global.t('inputValidation.requiredField'))
    .min(8, i18n.global.t('inputValidation.minLength', {length: '8'}))

  public phoneValidator = () => string().trim().required(i18n.global.t('inputValidation.requiredField'))
    .trim()
    .matches(this.phoneRegExp, i18n.global.t('inputValidation.phoneFormat'))

  public userTypeValidator = () => number().required(i18n.global.t('inputValidation.requiredField')).min(1, i18n.global.t('inputValidation.requiredField'))

  public minAmount = (minAmount: number) => number().transform((val) => Number.isNaN(val) ? null : val)
    .required(i18n.global.t('inputValidation.requiredField'))
    .min(minAmount, i18n.global.t('inputValidation.minValue', {minValue: minAmount}))

  public stringRequired = () => string().required(i18n.global.t('inputValidation.requiredField'))

  public numberRequired = () => number().required(i18n.global.t('inputValidation.requiredField'))
  public dateRequired = () => date().required(i18n.global.t('inputValidation.requiredField')).min(new Date(),)

  public minLength = (minLength: number) => string().trim().required(i18n.global.t('inputValidation.requiredField'))
    .min(minLength, i18n.global.t('inputValidation.minLength', {length: minLength}))

}


export default new Validators
