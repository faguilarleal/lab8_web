import { describe, it, expect } from 'vitest'
import calcular from './operaciones.js'

describe('Operaciones de suma', () => {
  it('Suma 1 y 2, espera resultado 3', () => {
    expect(calcular("1+2")).toEqual("3")
  })

  it('Empieza con un numero negativo y suma -1 + 2, espera 1', () => {
    expect(calcular("-1+2")).toEqual("1")
  })

  it('Suma decimales, 1.5 + 2.5, espera 4', () => {
    expect(calcular("1.5+2.5")).toEqual("4")
  })

  it('Suma -0.1 + 0.2, espera 0.1', () => {
    expect(calcular("-0.1+0.2")).toEqual("0.1")
  })

})