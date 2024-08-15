import { Map, List } from "immutable";

export default function concatElements(page1, page2) {
    const list1 = List(page1);
    const list2 = List(page2);

    return page1.concat(page2);
}
export default function mergeElements(page1, page2) {
    const list1 = Map(page1);
    const list2 = Map(page2);

    return page1.merge(page2);
}