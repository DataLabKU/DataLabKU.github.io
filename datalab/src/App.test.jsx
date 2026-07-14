import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './context/ThemeContext';
import Nav from './components/Nav';

function renderNav() {
  return render(
    <ThemeProvider>
      <Nav />
    </ThemeProvider>
  );
}

describe('App shell', () => {
  it('renders DATA Lab brand in navigation', () => {
    renderNav();
    expect(screen.getByLabelText(/DATA Lab home/i)).toBeInTheDocument();
  });
});
