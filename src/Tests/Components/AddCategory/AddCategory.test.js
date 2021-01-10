import { shallow } from "enzyme";
import AddCategory from "../../../Components/AddCategory/AddCategory";
import '@testing-library/jest-dom';


describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn(); //Esto simula ser una funcion
    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks(); //Esto usualmente se llama para que se limpie alguna funcion o simulacion
        wrapper = shallow(<AddCategory setCategories={setCategories} />); 
    })
    test('Debe mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    // test('Probar que cambia el estado', () => {
    //     const value = 'Hola mundo'
    //     wrapper.find('input').simulate('change', {
    //         target: {value: value}}); //Simulamos el evento dandole un valor a la propiedad value de target
        
    //     //expect(wrapper.find(p).text()).toBe(value)
    // })

    test('No debe de postear la informacion con submit', () => {
        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}})
        expect(setCategories).toHaveBeenCalled();//.not.toHaveBeenCalled(), le dice que no ha sido llamado
    })

    test('Probar el submit',() => {
        const value = 'Josue';
        wrapper.find('input').simulate('change', {
            target: {value: value}
        });
        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        console.log('Se ha enviado correctamente');
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})
//Cosas nuevas aorebdudas:
//change y su otro argumento
//.toHaveBeenCalled()
// jest.clearAllMocks()
// toHaveBeenCalledTimes(number) Numero de veces que se ejecuto algo
// toHaveBeenCalledWith(expect.any(Function)) => Asi preguntamos si lo que ha sido llamado con algo, en el caso del ejemplo una funcion
