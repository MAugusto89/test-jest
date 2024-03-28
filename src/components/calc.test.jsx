/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Calculator from './calc';

// eslint-disable-next-line testing-library/prefer-screen-queries
describe('Operações na calculadora', () => {
    test('Testa a adição de dois números', () => {
        const { getByText, getByTestId } = render(<Calculator />);
        fireEvent.click(getByText('4'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('='));
        expect(getByTestId('display_teste_id')).toHaveValue('6')
    });
    test('Testa a subtração de dois números', () => {
        const { getByText, getByTestId } = render(<Calculator />);
        fireEvent.click(getByText('8'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('='));
        expect(getByTestId('display_teste_id')).toHaveValue('6')
    });
    test('Testa a multiplicação de dois números', () => {
        const { getByText, getByTestId } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('×'));
        fireEvent.click(getByText('8'));
        fireEvent.click(getByText('='));
        expect(getByTestId('display_teste_id')).toHaveValue('16')
    });
    test('Testa a divisão de dois números', () => {
        const { getByText, getByTestId } = render(<Calculator />);
        fireEvent.click(getByText('9'));
        fireEvent.click(getByText('÷'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('display_teste_id')).toHaveValue('3')
    });
  test('Testa se a divisão funciona corretamente', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('C'));
    expect(getByTestId('display_teste_id')).toHaveValue('')
  });

});