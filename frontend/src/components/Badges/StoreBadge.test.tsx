// src/components/ui/StoreBadge.test.tsx
import { render, screen } from '@testing-library/react'
import StoreBadge from './StoreBadge'
import { GOOGLE_PLAY_BADGE } from '../../constants/constants'


describe('StoreBadge', () => {
  it('Render with all props', () => {
    render(
      <StoreBadge
        href="https://play.google.com/store/apps/details?id=com.osp.projects.bembos&hl=pt_BR"
        src={GOOGLE_PLAY_BADGE}
        alt="Google Play"
      />
    )

    const linkElement = screen.getByRole('link')
    const imgElement = screen.getByRole('img')

    expect(linkElement).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=com.osp.projects.bembos&hl=pt_BR')
    expect(imgElement).toHaveAttribute('src', GOOGLE_PLAY_BADGE)
    expect(imgElement).toHaveAttribute('alt', 'Google Play')

  })
})
