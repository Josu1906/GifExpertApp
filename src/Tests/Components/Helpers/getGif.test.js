import { getGif } from "../../../Helpers/getGifs"

describe('Pruebas en getGifs Fetch',()=> {
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGif('One Puch');
        expect(gifs.length).toBe(10);
    })
})