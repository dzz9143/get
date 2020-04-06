## get

A helper function to retrieve a value from object based on path string

### get(object, path)
* object <any> - object to query on
* path <string> - a path string consists of multiple components separated by forward slash `/`, a component string consists of any character other than forward slash `/`

```typescript

const object = {
    name: 'foo',
    foo: {
        bar: 'hello',
    },
    scores: [1, 2, 3];
    message: null
};

get(object, 'name')         // === 'foo'
get(object, 'foo/bar')      // === 'hello'
get(object, 'scores/1')     // === 2
get(object, 'not exist')    // === undefined
get(object, 'message')      // === null
```