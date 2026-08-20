import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Nav from './components/Nav';
import People from './components/People';

function renderNav() {
  return render(<Nav />);
}

describe('App shell', () => {
  it('renders DATA Lab brand in navigation', () => {
    renderNav();
    expect(screen.getByLabelText(/DATA Lab home/i)).toBeInTheDocument();
  });

  it('renders people without CV data as static profiles', () => {
    render(<People />);
    expect(screen.getByText('Humoud Alghanem')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Humoud Alghanem/i })).not.toBeInTheDocument();
    expect(screen.queryByText('CV unavailable')).not.toBeInTheDocument();
  });

  it('keeps CV profiles interactive', async () => {
    render(<People />);
    const profile = screen.getByRole('button', { name: /View CV for Abdullah Almekhyal/i });

    fireEvent.click(profile);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Close profile/i }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument(), { timeout: 500 });
    expect(document.activeElement).toBe(profile);
  });
});
