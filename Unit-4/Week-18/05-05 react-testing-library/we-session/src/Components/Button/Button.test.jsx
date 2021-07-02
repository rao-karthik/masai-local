import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';
import renderer from 'react-test-renderer';

describe("Button component Testing",()=>{
    const buttonTestId = "button-form";

    // * Test the component itself is failing

    it("should render the label correctly", ()=>{
        const label = "TESTING";
        const { getByTestId } = render(<Button label={label} />)

        // 

        const btn = getByTestId(buttonTestId);
        expect(btn.textContent).toBe(label)
    })

    // * functionality

    it("button should invoke the onClick prop", ()=>{
        const mockFn = jest.fn();
        const label = "ADD";
        render( <Button label={label} onClick={mockFn} />)

        const btn = screen.getByTestId(buttonTestId);

        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledTimes(5)
    })
    
    // * button colors

    it("Button colors should work correctly", ()=>{
        const label = "COLOR";
        const color = "red";
        render (<Button label={label} color={color} />)

        const btn = screen.getByTestId(buttonTestId);

        expect(btn.textContent).toBe(label);
        expect(btn.style.backgroundColor).toBe(color);
    })

    //* snapshot

    it("matches snapshot", ()=>{
        const tree = renderer.create(<Button color="green" label="snap" />)
        expect(tree).toMatchSnapshot();
    })
})