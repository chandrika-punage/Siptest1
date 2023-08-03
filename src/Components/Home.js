import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <img
                  src="https://www.tech-ceos.com/wp-content/uploads/2020/09/Recent-trends-of-education-sector-in-2020.jpg"
                  alt="Error"
                />
                <div className="card-header">
                  <h3>Education Sector</h3>
                </div>
                <div className="card-text">
                  <p>
                  Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training, or research. It is a fundamental aspect of human development and plays a crucial role in shaping individuals and societies.
Education can take place in formal settings, such as schools, colleges, and universities, where students follow a structured curriculum and are taught by qualified teachers. Formal education typically progresses through different levels, including primary education, secondary education, and higher education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home