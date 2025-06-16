# Skip Page Redesign

## 🔗 Live Link

[Add your deployment link here]

## Overview

This project is a redesign of the Skip Page, built with modern React tooling and UI best practices to improve responsiveness, styling, and user experience.

## Tech Stack

React (with Vite for fast builds and dev server)

Tailwind CSS for styling

ShadCN UI for intuitive components

Context API + Custom Hooks for state management

## The Approach

### Project Setup

Initialized a new React project using Vite.

### Styling

Integrated Tailwind CSS for responsive and utility-first styling.

### Component Structure

Created the core UI components:

- SkipCard: Renders individual skip items.
- SkipSelector: Displays a list of skips.

### Responsive Design

Styled all components using Tailwind CSS to ensure responsiveness across devices.

### State Management

Created a SkipContext to manage application state in one centralized location.
State includes: skips, selectedSkip, loading, and error.

Custom Hook

    Built a useSkip hook to simplify access to the SkipContext and encourage clean component logic.

### UI Enhancements

Integrated ShadCN UI to enhance the look and feel of the user interface.

### Data Fetching

In the Skips page, made an API call to fetch skip data.
The result updates the skips state in the context.

### Error Handling

If there's an error, the SkipsError component is displayed.
If skips are available, the SkipSelector is rendered.

### Selected Skip Details

The SelectedSkip component is rendered as a dialog when a skip is selected.
It displays detailed information about the chosen skip to allow the user to proceed.
