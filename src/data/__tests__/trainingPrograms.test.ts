import { describe, it, expect } from 'vitest'
import { trainingPrograms, type TrainingProgram } from '../trainingPrograms'

describe('Training Programs', () => {
  it('should be an array', () => {
    expect(Array.isArray(trainingPrograms)).toBe(true)
  })

  it('should contain exactly 4 training programs', () => {
    expect(trainingPrograms).toHaveLength(4)
  })

  it('should have all programs with required fields', () => {
    trainingPrograms.forEach((program: TrainingProgram) => {
      expect(program).toHaveProperty('title')
      expect(program).toHaveProperty('description') 
      expect(program).toHaveProperty('icon')
      expect(program).toHaveProperty('topics')
      
      expect(typeof program.title).toBe('string')
      expect(typeof program.description).toBe('string')
      expect(Array.isArray(program.topics)).toBe(true)
      expect(program.title).toBeTruthy()
      expect(program.description).toBeTruthy()
      expect(program.topics.length).toBeGreaterThan(0)
    })
  })

  it('should have all topics as non-empty strings', () => {
    trainingPrograms.forEach((program: TrainingProgram) => {
      program.topics.forEach((topic: string) => {
        expect(typeof topic).toBe('string')
        expect(topic).toBeTruthy()
      })
    })
  })

  it('should contain Basic Seamanship program', () => {
    const basic = trainingPrograms.find(p => p.title === 'Basic Seamanship')
    expect(basic).toBeDefined()
    expect(basic?.topics).toContain('Knots and Splices')
    expect(basic?.topics).toContain('Boat Safety')
  })

  it('should contain Leadership Development program', () => {
    const leadership = trainingPrograms.find(p => p.title === 'Leadership Development')
    expect(leadership).toBeDefined()
    expect(leadership?.topics).toContain('Team Leadership')
    expect(leadership?.topics).toContain('Communication')
  })

  it('should contain Advanced Navigation program', () => {
    const navigation = trainingPrograms.find(p => p.title === 'Advanced Navigation')
    expect(navigation).toBeDefined()
    expect(navigation?.topics).toContain('Chart Reading')
    expect(navigation?.topics).toContain('GPS Systems')
  })

  it('should contain Sailing Certification program', () => {
    const sailing = trainingPrograms.find(p => p.title === 'Sailing Certification')
    expect(sailing).toBeDefined()
    expect(sailing?.topics).toContain('Sailing Theory')
    expect(sailing?.topics).toContain('Certification Prep')
  })
})