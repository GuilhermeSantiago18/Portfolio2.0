import { render, screen } from '@testing-library/react'
import {Header} from './Header'

describe('Header', () => {
  it('Should render portfolio title"', () => {
    render(<Header />)
    expect(screen.getByTestId("icon-button")).toBeDefined()
  })
})
