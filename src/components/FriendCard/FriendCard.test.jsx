import { test, render, screen, fireEvent } from 'vitest';
import FriendCard from '../FriendCard/index';

test('handleMessageClick is called when the MessageButton is clicked', () => {
  const navigateMock = { navigate: jest.fn() };
  const useNavigateMock = jest.fn(() => navigateMock);

  render(<FriendCard username="John" />, { mocks: { useNavigate: useNavigateMock } });

  const messageButton = screen.getByRole('button', { name: 'Message Button' });
  fireEvent.click(messageButton);

  expect(navigateMock.navigate).toHaveBeenCalledWith('/chat');
});
