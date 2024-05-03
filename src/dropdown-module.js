export default function dropdownMaker(anchor, dropBtn) {
    const anchorGrbbr = anchor;

    //sample code for dom children array
    function getDomChildrenAsArray(element) {
        const children = element.children;
        const childrenArray = [];
        for (let i = 0; i < children.length; i++) {
          childrenArray.push(children[i]);
        }
        return childrenArray;
      }
      
      const childrenArray = getDomChildrenAsArray(anchor);

      console.log(childrenArray);
}