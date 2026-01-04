import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "rgba(238, 238, 245, 0.89)" }}>
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-9">
            <h1 className="mb-0">Support Portal</h1>
          </div>

          <div className="col-3 d-flex justify-content-end">
            <button className="btn btn-primary">My tickets</button>
          </div>
        </div>
        <div className="row pt-2 pb-5">
          <div className="col ">
            <form>
              <div class="form-group">
               <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Eg. how do I activate F&O"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
