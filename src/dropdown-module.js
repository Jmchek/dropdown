export default function dropdownMaker(anchor, dropBtn) {
    const anchorGrbbr = anchor;
    const btnAnchorGrbbr = dropBtn;

    anchorGrbbr.style.display = "none";

    btnAnchorGrbbr.addEventListener("click", (y) => {
      const x = document.querySelector(".dropdown-content");

      x.style.display = x.style.display == "none" ? "block" : "none";
    });
}