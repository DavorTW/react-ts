import { describe, test, expect, vi, afterEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import { FirstStepsApp } from './FirstStepsApp';

const mockItemCounter = vi.fn((props: unknown) => {
    return <div data-testid='ItemCounter'/>;
})

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))


// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: () => <div data-testid='ItemCounter'/>
// }));

describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp/>);
        
        expect(container).toMatchSnapshot();
    });

    test('should render correct number of ItemCounter components', () => {
        render(<FirstStepsApp/>);

        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(3);
    })

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp/>);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch',
            quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro controller',
            quantity: 2,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash',
            quantity: 1,
        });
    });

});