import React from 'react';
import { describe, it, expect } from 'vitest';
import ReactDOM from 'react-dom';

import ChatLearningPlanPage from '../ChatLearningPlanPage';

describe('ChatLearningPlanPage', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatLearningPlanPage />, div);
    expect(div.innerHTML).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });
});
