import { render } from '@testing-library/react';

import NakodaBhairavChalisa from './nakoda-bhairav-chalisa';

describe('NakodaBhairavChalisa', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NakodaBhairavChalisa />);
    expect(baseElement).toBeTruthy();
  });
});
