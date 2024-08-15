import { Map, mergeDeep } from 'immutable';

export default function mergeDeeplyElementsv(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);
    
    return map1.mergeDeep(map2);
} 