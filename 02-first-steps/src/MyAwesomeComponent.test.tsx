import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeComponent } from "./MyAwesomeComponent";

describe('MyAwesomeComponent', () => {
    test('should render firstName and lastName', () => {
        const {container} = render(<MyAwesomeComponent/>);
        
        const h1 = container.querySelector("h1");
        const h3 = container.querySelector("h3");

        expect(h1?.innerHTML).toContain('Davor');
        expect(h3?.innerHTML).toContain('Insaurralde');
    });

    test('should render firstName and lastName - screen', () => {
        render(<MyAwesomeComponent/>);
        screen.debug();
        const h1 = screen.getByRole('heading', {level: 1});
        const h3 = screen.getByTestId("last-name-title");

        expect(h1.innerHTML).toContain("Davor");
        expect(h3.innerHTML).toContain("Insaurralde");
    })

    test('should match snapshot', () => {
        const {container} = render(<MyAwesomeComponent/>);
        expect(container).toMatchSnapshot();
    });

    test('should match snapshot - screen', () => {
        render(<MyAwesomeComponent/>);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    })
 })