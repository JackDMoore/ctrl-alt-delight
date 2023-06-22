import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi, test } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter ,  BrowserRouter as Router } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import ChatQuiz from '../ChatQuiz';

describe('ChatQuiz component', () => {
    it('should render without errors', () => {
        render(<ChatQuiz />);
    });

    it('should have empty initial selectedLanguage state', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Language')
        const consoleDropdown = consoleDropdowns[0]
        expect(consoleDropdown.value).toEqual('English')
    });
      
    it('should have empty initial selectedDifficulty state', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Difficulty')
        const consoleDropdown = consoleDropdowns[0]
        expect(consoleDropdown.value).toEqual('Beginner')
    });


    it('selectedLanguage state should be German updated when language is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Language');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'German' } });
        expect(consoleDropdown.value).toEqual('German');
    });

    it('selectedLanguage state should change to French be updated when language is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Language');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'French' } });
        expect(consoleDropdown.value).toEqual('French');
    });

    it('selectedLanguage state should change to English be updated when language is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Language');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'English' } });
        expect(consoleDropdown.value).toEqual('English');
    });

    it('selectedLanguage state should change to Dutch be updated when language is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Language');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'Dutch' } });
        expect(consoleDropdown.value).toEqual('Dutch');
    });

    it('selectedLanguage state should change to Italian be updated when language is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Language');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'Italian' } });
        expect(consoleDropdown.value).toEqual('Italian');
    });

    it('selectedLanguage state should not be seen when a language is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Language');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'Italian' } });
        expect(consoleDropdown.value).not.toEqual('English');
    });

    it('selectedDifficulty state should be updated to Intermediate when difficulty is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Difficulty');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'Intermediate' } });
        expect(consoleDropdown.value).toEqual('Intermediate');
    });

    it('selectedDifficulty state should be updated to Beginner when difficulty is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Difficulty');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'Beginner' } });
        expect(consoleDropdown.value).toEqual('Beginner');
    });

    it('selectedDifficulty state should be updated to Advanced when difficulty is changed', () => {
        const consoleDropdowns = screen.getAllByLabelText('Select Difficulty');
        const consoleDropdown = consoleDropdowns[0];
        fireEvent.change(consoleDropdown, { target: { value: 'Advanced' } });
        expect(consoleDropdown.value).toEqual('Advanced');
    });

    it('should display the correct system message content after selecting language, difficulty, and number of questions', () => {
        render(<ChatQuiz />);
        const languageDropdowns = screen.getAllByLabelText('Select Language');
        const difficultyDropdown = screen.getByRole('difficultyDropdown');
        const numQuestionsDropdown = screen.getByLabelText('Select Number of Questions');
        const languageDropdown = languageDropdowns[0];
      
        // Select the desired options in the language dropdown
        fireEvent.change(languageDropdown, { target: { value: 'Italian' } });
      
        // Select the desired options in the difficulty and number of questions dropdowns
        fireEvent.change(difficultyDropdown, { target: { value: 'Advanced' } });
        fireEvent.change(numQuestionsDropdown, { target: { value: '5' } });
      
        // Perform assertions on the system message content
        const systemMessage = screen.getByText("Hello, I'm LinguaBot! Please select the language"); // Update the expected system message content here
        expect(systemMessage).toBeInTheDocument();
      });
      
      
      
      
  });
  

// Add more test cases as needed
