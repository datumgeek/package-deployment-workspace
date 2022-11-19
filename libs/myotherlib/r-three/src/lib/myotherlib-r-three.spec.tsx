import { render } from '@testing-library/react';

import MyotherlibRThree from './myotherlib-r-three';

describe('MyotherlibRThree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyotherlibRThree />);
    expect(baseElement).toBeTruthy();
  });
});
