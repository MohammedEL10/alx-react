import { fromJS } from 'immutable';
export function getListObject(array) {
    const  ImmutableList = list(array);
}
export function addElementToList(list, element) {
    return list.push(element);
}