import { describe, it, expect } from 'vitest'
import calcular from './operaciones.js'

describe('Operaciones de multiplicacion', () => {
  it('Mult de dos numeros positivos', () => {
    expect(calcular("12*2")).toEqual("24")
  })

  it('Mult de un numero negativo y otro positivo', () => {
    expect(calcular("-1*2")).toEqual("-2")
  })

  it('Multiplicacion de dos decimales', () => {
    expect(calcular("1.5*2.5")).toEqual("3.75")
  })

  it('Mul de dos negativos', () => {
    expect(calcular("-0.1*-0.2")).toEqual("0.02")
  })

})