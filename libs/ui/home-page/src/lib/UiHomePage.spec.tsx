import { render } from '@testing-library/react';

import UiHomePage from './UiHomePage';

describe('UiHomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiHomePage />);
    expect(baseElement).toBeTruthy();
  });
});
