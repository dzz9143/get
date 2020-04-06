import { get } from "../src/get";

describe('get should', () => {
    it('be able to retrieve value from an object given the path string', () => {
        const o = {
            name: 'test',
            email: 'test@mail.com',
            age: 24,
            scores: [1, 2, 3],
            addition: {
                foo: 'bar',
            },
            foo: null,
        } as any;

        expect(get(o, 'name')).toEqual('test');
        expect(get(o, 'email')).toEqual('test@mail.com');
        expect(get(o, 'scores/0')).toEqual(1);
        expect(get(o, 'addition')).toEqual({
            foo: 'bar',
        });
        expect(get(o, 'addition/foo')).toEqual('bar');
        expect(get(o, 'bar')).toBeUndefined();
        expect(get(o, 'foo')).toBeNull();
    });

    it('be able to retrieve value from an array given the path string', () => {
        const arr = [1, { name: 'foo' }, 2];
        expect(get(arr, '0')).toEqual(1);
        expect(get(arr, '1/name')).toEqual('foo');
        expect(get(arr, '100')).toBeUndefined();
    });

    it('be able to return undefined if input is not valid', () => {
        expect(get(1, 'foo')).toBeUndefined();
        expect(get(null, 'foo')).toBeUndefined();
        expect(get(false, 'foo')).toBeUndefined();
        expect(get('a string', 'foo')).toBeUndefined();
    });
});