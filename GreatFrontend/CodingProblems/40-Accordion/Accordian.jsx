// Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet.
// Some HTML is provided for you as example contents along with a chevron icon.

// Requirements
// By default, all sections are collapsed and are hidden from view.
// Clicking on a section title toggles the contents.
// If the section is collapsed, the section will be expanded and the contents will be displayed.
// If the section is expanded, the section will be collapsed and the contents will be hidden.
// The sections are independent of each other.

// Boolean constructor to filter method
// const arr = [1, 2, 3, null, undefined, NaN, 0, "", false];
// const filteredArr = arr.filter(Boolean);
// console.log(filteredArr); // [1, 2, 3, true]
// ["accordion-icon", true && "accordion-icon--rotated"].filter(Boolean).join(" "); // 'accordion-icon accordion-icon--rotated'

import { useState } from "react";

export default function Accordion({ sections }) {
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);

        return (
          <div className="accordion-item" key={value}>
            <button
              className="accordion-item-title"
              type="button"
              onClick={() => {
                const newOpenSections = new Set(openSections);
                newOpenSections.has(value)
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value);
                setOpenSections(newOpenSections);
              }}
            >
              {title}
              <span
                aria-hidden={true}
                className={[
                  "accordion-icon",
                  isExpanded && "accordion-icon--rotated",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
            <div className="accordion-item-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}
