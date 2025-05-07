import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('Renderiza la aplicación correctamente', () => {
    render(<App />);
    expect(screen.getByText(/Lista de razas de perros/i)).toBeInTheDocument();
});

