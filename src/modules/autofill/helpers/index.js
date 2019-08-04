// @flow
export function uniqueList(fieldList: [string]): [string]  {
    let result = [];

    fieldList.map((value) => {
        if (!result.includes(value)) {
            result.push(value);
        }
    });

    return result;
}

export function filterStrStartWith(str: string, list: []): [string]  {
    return Boolean(str) ? list.filter((value) => value.startsWith(str)) : [];
}

function getDisplayName (C) {
    return C.displayName || C.name || 'Component';
}

export function getHocDisplayName (EnhancedComponent, WrapperComponent) {
    return `${getDisplayName(EnhancedComponent)}(${getDisplayName(WrapperComponent)})`;
}

