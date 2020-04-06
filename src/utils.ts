const componentReg = /([^\/]+)/g;

function getPathComponents(path: string) {
    const result: string[] = [];
    path.replace(componentReg, (component) => {
        result.push(component);
        return '';
    });
    return result;
}

export {
    getPathComponents,
};