import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup); //afterEach is a global function from Jest

describe('About component', () => {  //describe is a function from Jenst
    // Renders About test
    // First Test  
    // In the first argument, a string declares what is being tested
    // In the second argument, a callback function runs the test
    // Alternatively, 'test' can also be used interchangeably with 'it' to create a test.
    it('renders', () => {
        render(<About />);
      });

    // Second Test  
    it('matches snapshot DOM node structure', () => {
        // Render About
        // In this test case, we'll use the asFragment function, which returns a snapshot of the About component.
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });
}) 

