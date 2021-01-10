import { Enzyme, shallow } from 'enzyme';
import GifExpertApp from './Components/GifExpertApp/GifExpertApp';

describe('Componentes', ()=> {
  test('Debe mostrar los componente correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  })
})