import React from "react";
import TicketAccordingItem from "./TicketAccordingItem";

function CreateTicket() {
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-8">
          <div className="accordion" id="ticketAccordion">
            <TicketAccordingItem
              id="account"
              title="Account Opening"
              items={[
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
              ]}
            />

            <TicketAccordingItem
              id="youraccount"
              title="Your Zerodha Account"
              items={[
                "Your Profile",
                "Account modification",
                "Client Master Report (CMR) and Depository Participant (DP)",
                "Nomination",
                "Transfer and conversion of securities",
              ]}
            />

            <TicketAccordingItem
              id="kite"
              title="Kite"
              items={[
                "IPO",
                "Trading FAQs",
                "Margin Trading Facility (MTF) and Margins",
                "Charts and orders",
                "Alerts and Nudges",
                "General",
              ]}
            />
            <TicketAccordingItem
              id="funds"
              title="Funds"
              items={[
                "Add money",
                "Withdraw money",
                "Add bank accounts",
                "eMandates",
              ]}
            />
            <TicketAccordingItem
              id="console"
              title="Console"
              items={[
                "  Portfolio",
                "Corporate actions",
                "Funds statement",
                "Reports",
                "Profile",
                "Segments",
              ]}
            />
            <TicketAccordingItem
              id="coin"
              title="Coin"
              items={[
                "Mutual funds",
                "National Pension Scheme (NPS)",
                "Features on Coin",
                "Payments and Orders",
                "General",
              ]}
            />
          </div>
        </div>
        <div className="col-4 p-3">
          <div className="p-3" style={{backgroundColor: "rgba(255, 225, 185, 0.51)"}}>
            <ul>
              <li><a href="" style={{textDecoration:"underline"}}>Latest Intraday leverages and Square-off timings</a></li>
              <li><a href="" style={{textDecoration:"underline"}}>Surveillance measure on scrips - December 2025</a></li>
            </ul>
          </div>
          <div className="my-4">
            <div className="card shadow-sm">
              <div
                className="card-header fw-medium"
                style={{ backgroundColor: "rgba(238, 238, 245, 0.89)" }}
              >
                Quick links
              </div>

              <div className="card-body">
                <ol className="ps-3 mb-0">
                  <li className="mb-2 ">
                    <a href="#" className="text-decoration-none text-primary">
                      Track account opening
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none text-primary">
                      Track segment activation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none text-primary">
                      Intraday margins
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none text-primary">
                      Kite user manual
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-primary">
                      Learn how to create a ticket
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
