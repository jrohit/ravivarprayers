import { render } from '@testing-library/react';

import PrayerTabs from './prayer-tabs';

describe('PrayerTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrayerTabs />);
    expect(baseElement).toBeTruthy();
  });
});
