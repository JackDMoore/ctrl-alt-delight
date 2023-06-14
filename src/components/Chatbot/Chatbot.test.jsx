import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
expect.extend(matchers);

import Chatbot from '.'

describe('Chatbot component', () => {
    beforeEach(() => {
        render(<Chatbot />);
    });

    afterEach(() => {
        cleanup();
});
});
