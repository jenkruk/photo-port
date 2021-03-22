import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup)

describe('ContactForm is rendering', () => {
    it('renders', () => {
      render(<ContactForm />);
    });
  
    it('renders', () => {
      const { asFragment } = render(<ContactForm />)
      expect(asFragment()).toMatchSnapshot()
    });

    //   make sure that the title of our <h1> is Contact me
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
        })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit')
        })
  });