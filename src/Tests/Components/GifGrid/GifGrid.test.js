import { shallow } from "Enzyme";
import { GifGrid } from "../../../Components/GifGrid/GifGrid";
import { useFetchGifs } from "../../../hooks/useFetchGifs";
import '@testing-library/jest-dom';

jest.mock('../../../hooks/useFetchGifs')
//Mock actua como una funcion del componente

describe('Pruebas en el componente <GifGrid />', () => {
    const category = 'Josue';
    test('Mostrar la inf en pantalla', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    
    })


    test('Debe mostrar items cuando carga la imagen', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://www.holasoyJosue.com',
            title: 'Josuee'
        }]; 
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})