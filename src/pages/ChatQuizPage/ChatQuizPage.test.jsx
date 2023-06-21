import { describe, it, expect } from 'vitest';
import ReactDOM from 'react-dom';
import ChatQuizPage from '../ChatQuizPage';

describe('ChatQuizPage', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatQuizPage />, div);
    expect(div.querySelector('.input-container')).not.toBeNull();
    ReactDOM.unmountComponentAtNode(div);
  });
});
