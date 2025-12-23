import React from "react";

function TicketAccordionItem({ id, title, items }) {
  return (
    <div className="accordion-item mb-4">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded="false"
          aria-controls={`collapse-${id}`}
        >
          {title}
        </button>
      </h2>

      <div
        id={`collapse-${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${id}`}
      >
        <div className="accordion-body">
          <ul className="list-unstyled ps-3">
            {items.map((item, index) => (
              <li key={index} className="mb-3">
                <a href="#" className="text-decoration-none text-primary">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TicketAccordionItem;
