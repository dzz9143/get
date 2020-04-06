import { getPathComponents } from "../src/utils";

describe("utils.getPathComponents should", () => {
    it("be able to convert a path string to a component array", () => {
        let path = '/a/b/c';
        let arr = getPathComponents(path);
        expect(arr).toEqual(['a', 'b', 'c']);
        
        path = 'a/b/c';
        arr = getPathComponents(path);
        expect(arr).toEqual(['a', 'b', 'c']);

        path = 'foo/bar/@abc';
        arr = getPathComponents(path);
        expect(arr).toEqual(['foo', 'bar', '@abc']);

        path = 'foo bar/abc/a.b.c';
        arr = getPathComponents(path);
        expect(arr).toEqual(['foo bar', 'abc', 'a.b.c']);

        path = 'foo/0/bar';
        arr = getPathComponents(path);
        expect(arr).toEqual(['foo', '0', 'bar']);
    });

    it('be able to return empty array if input is a single component or empty string', () => {
        let path = 'foo';
        let arr = getPathComponents(path);
        expect(arr).toEqual(['foo']);

        path = '';
        arr = getPathComponents(path);
        expect(arr).toEqual([]);
    });
});