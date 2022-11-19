import { render } from '@testing-library/react';

import MylibROne from './mylib-r-one';

describe('MylibROne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MylibROne />);
    expect(baseElement).toBeTruthy();
  });
});
