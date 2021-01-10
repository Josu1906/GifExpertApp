import { Enzyme, shallow } from 'enzyme';
import { GiftGridItem } from '../../Components/GiftGridItem/GiftGridItem';

describe('Pruebas en GifGridItem', ()=> {
    const title = 'Un titulo';
    const url = 'https://localhost/algo-por-ahi.jpg'
    const wrapper = shallow(<GiftGridItem title={title} url={url}/>);
    test('Debe mostrar los componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe de tener un parrafo con el title', () => {
     
    const texto = wrapper.find('p').text();
    expect(texto).toBe(title);
  })

  test('Debe de tener la imagen una url y el alt', () => {
      const src = wrapper.find('img');
    //   console.log(src.props().alt); //Asi vemos el objeto completo con .html(), y vemos las propiedades con props.propiedad or prop('propiedad')
        expect(src.prop('src')).toBe(url);
        expect(src.prop('alt')).toBe(title);
    })
  
    test('Debe tener las clases del div', () => {
        const className = wrapper.find('div');
                    //Pra negar se utiliza .not
        expect(className.prop('className')).toBe('card animate__animated animate__fadeInUp');
    })
})

//Cosas nuevas

//prop, props(), html(), 