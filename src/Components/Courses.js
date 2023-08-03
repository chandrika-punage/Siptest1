import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const Courses = () => {
  return (
    <>
      <div className="container-fluid">
        <h1>Courses Offered</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-dark-subtle">
              <div className="card-body">
                <h2>Java</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque, doloribus iure dolorem distinctio quod aperiam est
                  quos sint expedita tenetur maxime modi saepe aliquid sapiente
                  ipsam dolorum impedit quis molestias?
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-outline-dark">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-primary-subtle">
              <div className="card-header">
                <h2>Python</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto tempore adipisci deserunt exercitationem esse
                  cumque, minus repellendus, omnis soluta officiis aliquid quo
                  animi nam.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-outline-dark">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-warning-subtle">
              <div className="card-body">
                <h2 className="card-title">C++</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla velit beatae sapiente esse unde, ex atque incidunt ea
                  repellendus nemo?
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-outline-dark">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqh37BbBjwufmxA9cWicdMUgBgoI0cDRmPrtRF6o&s"
                alt="Error"
              />
              <div className="card-header">
                <h3>C</h3>
              </div>
              <div className="card-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  magni accusamus hic suscipit quis laborum, molestias
                  laudantium quae vero voluptas.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline-dark">Get more</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                alt="Error"
              />
              <div className="card-header">
                <h3>React</h3>
              </div>
              <div className="card-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  magni accusamus hic suscipit quis laborum, molestias
                  laudantium quae vero voluptas.
                </p>
              </div>
              <div className="card-footer">
                <button class="btn btn-outline-dark">Get more</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                alt="Error"
              />
              <div className="card-header">
                <h3>Javascript</h3>
              </div>
              <div className="card-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  magni accusamus hic suscipit quis laborum, molestias
                  laudantium quae vero voluptas.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline-dark">Get more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses;