// src/components/ui/StoreBadge.test.tsx
import { render, screen } from '@testing-library/react'
import StoreBadge from './StoreBadge'

describe('StoreBadge', () => {
  it('Render with all props', () => {
    render(
      <StoreBadge
        href="https://example.com"
        src="/badge.png"
        alt="Baixar na loja"
        className="meu-classe-teste"
      />
    )

    const linkElement = screen.getByRole('link')
    const imgElement = screen.getByRole('img')

    expect(linkElement).toHaveAttribute('href', 'https://example.com')
    expect(imgElement).toHaveAttribute('src', '/badge.png')
    expect(imgElement).toHaveAttribute('alt', 'Baixar na loja')
    expect(imgElement).toHaveClass('hover:scale-105 transition')
    expect(imgElement).toHaveClass('meu-classe-teste')
  })
})
