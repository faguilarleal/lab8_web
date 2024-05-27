import { describe, it, expect } from 'vitest'
import calcular from './operaciones.js'

describe('Operaciones de division', () => {
  it('Division de enteros', () => {
    expect(calcular("15/5")).toEqual("3")
  })

  it('Division con decimales', () => {
    expect(calcular("12/8")).toEqual("1.5")
  })

  it('Division por cero', () => {
    expect(calcular("10/0")).toEqual("Infinity")
  })

  it('Division 0/0', () => {
    expect(calcular("0/0")).toEqual("NaN")
  })

})