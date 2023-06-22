import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ChatLearningPlan from "../ChatLearningPlan";

describe('ChatLearningPlan', () => {
  it('should select language', () => {
    render(<ChatLearningPlan />);
  
    // Select language
    const languageSelect = screen.getByTestId('language-select');
    fireEvent.change(languageSelect, { target: { value: 'English' } });
  
    // Assert the selected language
    expect(languageSelect.value).toBe('English');
  });
  
  it('should select skill level', () => {
    render(<ChatLearningPlan />);

    // Select skill level
    const skillSelectOptions = screen.getAllByTestId('skill');
    const skillSelect = skillSelectOptions[0];
    fireEvent.change(skillSelect, { target: { value: 'Intermediate' } });

    // Assert the selected skill level
    expect(skillSelect.value).toBe('Intermediate');
  });
  
  it('should select number of days', () => {
    render(<ChatLearningPlan />);
  
    // Select number of days
    const daysSelectOptions = screen.getAllByTestId('days');
    const daysSelect = daysSelectOptions[0]; 
    fireEvent.change(daysSelect, { target: { value: '20' } });
  
    // Assert the selected number of days
    expect(daysSelect.value).toBe('20');
  });
});
