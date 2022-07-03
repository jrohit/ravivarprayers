import { render } from '@testing-library/react';

import AdityaHridayamStrotam from './aditya-hridayam-strotam';

describe('AdityaHridayamStrotam', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdityaHridayamStrotam />);
    expect(baseElement).toBeTruthy();
  });
});
