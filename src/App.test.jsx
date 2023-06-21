import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components';
import * as Pages from './pages';

describe('App', () => {
  it('renders the homepage', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route index element={<Pages.HomePage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const homePageHeading = getByText('Welcome to LinguaPlay: Where Language Learning and Gaming Unite!');

    expect(homePageHeading).toBeTruthy();
  });
});
