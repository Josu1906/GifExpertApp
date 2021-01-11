import { shallow } from 'enzyme';
import GifExpertApp from '../../../Components/GifExpertApp/GifExpertApp';
    
describe('Pruebas en GifExpertApp', () => {
    test('Mostrar el contenido', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    })
})