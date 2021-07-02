import { Counter } from "./Counter";
import { fireEvent, render, screen } from '@testing-library/react';

describe("Counter component tests", function(){
    const testIds = {
        header: "counter-header",
        value: "counter-value",
        button: "button-form"
    }
    
    //* renders without error
    it("should render without errors", ()=>{
        render( <Counter />)
    })

    //* check the UI elements
    it("should dsiplay content correctly", ()=>{
        render( <Counter />);
        const header = screen.getByTestId(testIds.header);
        const value = screen.getByTestId(testIds.value);
        const buttons = screen.getAllByTestId(testIds.button);
        const [ add, reduce ] = buttons;

        expect( header.textContent ).toBe("Counter");
        expect( value.textContent ).toBe("0");
        expect( buttons.length ).toBe(2);
        expect( add.textContent ).toBe("ADD");
        expect( reduce.textContent ).toBe("REDUCE");
    })

    // * check the ui elements by props
    it("should display content correctly when props are passed", ()=>{
        const label = "LABEL";
        const count = 5;
        render ( <Counter label={label} initialValue={count} /> );

        const header = screen.getByTestId(testIds.header);
        const value = screen.getByTestId(testIds.value);
        
        expect( header.textContent ).toBe(label);
        expect( value.textContent ).toBe(`${count}`);
    })

    //* functionality
    it("it should change the value when user clicks on the add and remove buttons", ()=>{
        render ( <Counter /> )

        const value = screen.getByTestId(testIds.value);
        const buttons = screen.getAllByTestId(testIds.button);
        const [ add, reduce ] = buttons;

        const tests =[
            {
                test: ()=>{
                    fireEvent.click(add)
                    fireEvent.click(add)
                },
                output: '2'
            },
            {
                test: ()=>{
                    fireEvent.click(reduce)
                    fireEvent.click(reduce)
                    fireEvent.click(reduce)
                },
                output: '-1'
            }
        ];

        tests.forEach(({test, output})=>{
            test();
            expect(value.textContent).toBe(output)
        })
    })
})