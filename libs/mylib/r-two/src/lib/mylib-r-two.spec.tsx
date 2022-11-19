import { render } from '@testing-library/react';

import MylibRTwo from './mylib-r-two';

describe('MylibRTwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MylibRTwo />);
    expect(baseElement).toBeTruthy();
  });
});
