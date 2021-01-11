import { useFetchGifs } from "../../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas en el Custom Hook', () => {
    test('Debe de retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('comida'));
        const {data, loading} = result.current;

        await waitForNextUpdate()
        expect(data).toEqual([]);
        expect(loading).toBe(true)
    })

    test('Debe retornar arreglos con imgs', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('comida'));
        await waitForNextUpdate()
        const {data, loading} = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false)
    })
})