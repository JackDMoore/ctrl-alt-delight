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
  });
  

// Add more test cases as needed
