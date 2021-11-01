
import Menu  from './Menu';
import { render, screen } from '@testing-library/react';

  it('contains Menu Links', () => {
    render(<Menu />);
    const cardForm = screen.getByText(/Card Entry/i);
    expect(cardForm).toBeInTheDocument();

    const homePage = screen.getByText(/Home Page/i);
    expect(homePage).toBeInTheDocument();

  });
