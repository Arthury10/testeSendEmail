import * as Yup from 'yup'

const string = {
  length: '${path} deve ser exatamente ${length} caracteres',
  min: '${path} deve ser pelo menos ${min} caracteres',
  max: '${path} deve ser no máximo ${max} caracteres',
  matches: '${path} deve corresponder ao seguinte: "${regex}"',
  email: 'Campo ${path} deve conter um e-mail válido',
  url: '${path} deve ser um URL válido',
  trim: '${path} deve ser uma corda aparada',
  lowercase: '${path} deve ser uma cadeia minúscula',
  uppercase: '${path} deve ser uma cadeia maiúscula',
}

const number = {
  min: '${path} deve ser maior ou igual a ${min}',
  max: '${path} deve ser menor ou igual a ${max}',
  lessThan: '${path} deve ser menor que ${less}',
  moreThan: '${path} deve ser maior que ${more}',
  positive: '${path} deve ser um número positivo',
  negative: '${path} deve ser um número negativo',
  integer: '${path} deve ser um inteiro',
}

const date = {
  min: 'Campo ${path} deve ser mais tarde do que ${min}',
  max: '${path} deve ser mais cedo do que ${max}',
}

const boolean = {}

const object = {
  noUnknown:
    'Campo ${path} não pode ter chaves não especificadas na forma do objeto',
}

const array = {
  min: 'O campo ${path} deve ter pelo menos ${min} itens',
  max: 'O campo ${path} deve ter menos ou igual a itens ${max}',
}
Yup.setLocale({
  string,
  array,
  object,
  boolean,
  date,
  number,
})

export { Yup }
