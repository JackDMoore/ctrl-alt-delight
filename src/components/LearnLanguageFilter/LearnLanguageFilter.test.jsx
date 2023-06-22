import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import LearnLanguageFilter from '.';

describe('LearnLanguageFilter component', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      setEnglishOnly: vi.fn(),
      setFrenchOnly: vi.fn(),
      setGermanOnly: vi.fn(),
      setDutchOnly: vi.fn(),
      setItalianOnly: vi.fn(),
      englishOnly: false,
      frenchOnly: true,
      germanOnly: false,
      dutchOnly: true,
      italianOnly: false,
    };

    render(<LearnLanguageFilter {...mockProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('toggles English checkbox state on change', () => {
    const englishCheckbox = screen.getByLabelText('English');
    fireEvent.click(englishCheckbox);

    expect(mockProps.setEnglishOnly).toHaveBeenCalledWith(true);
  });

  it('toggles French checkbox state on change', () => {
    const frenchCheckbox = screen.getByLabelText('French');
    fireEvent.click(frenchCheckbox);

    expect(mockProps.setFrenchOnly).toHaveBeenCalledWith(false);
  });

  it('toggles German checkbox state on change', () => {
    const germanCheckbox = screen.getByLabelText('German');
    fireEvent.click(germanCheckbox);

    expect(mockProps.setGermanOnly).toHaveBeenCalledWith(true);
  });

  it('toggles Dutch checkbox state on change', () => {
    const dutchCheckbox = screen.getByLabelText('Dutch');
    fireEvent.click(dutchCheckbox);

    expect(mockProps.setDutchOnly).toHaveBeenCalledWith(false);
  });

  it('toggles Italian checkbox state on change', () => {
    const italianCheckbox = screen.getByLabelText('Italian');
    fireEvent.click(italianCheckbox);

    expect(mockProps.setItalianOnly).toHaveBeenCalledWith(true);
  });
});
