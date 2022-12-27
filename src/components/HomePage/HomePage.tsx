import React from "react";
import "./Homepage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <div>Slide</div>
        <div>Content</div>
        <div className="satage">
          <div className="chips">
            <div className="chip-g1">
              <div className="test "></div>
              <div className="test test2"></div>
              <div className="test test3"></div>
              <div className="test test4"></div>
              <div className="test test5"></div>
              <div className="test test6"></div>
              <div className="test test7"></div>
              <div className="test test8"></div>
            </div>
            {/* <div className="testb test9"></div>
            <div className="testb test10"></div>
            <div className="testb test11"></div>
            <div className="testb test12"></div>
            <div className="testb test13"></div>
            <div className="testb test14"></div>
            <div className="testb test15"></div>
            <div className="testb test16"></div> */}
            {/* <div className="testc test17"></div>
            <div className="testc test18"></div>
            <div className="testc test19"></div>
            <div className="testc test20"></div>
            <div className="testc test21"></div>
            <div className="testc test22"></div>
            <div className="testc test23"></div>
            <div className="testc test24"></div> */}
            {/* <div className="test "></div>
            <div className="test test2"></div>
            <div className="test test3"></div>
            <div className="test test4"></div>
            <div className="test test5"></div>
            <div className="test test6"></div>
            <div className="test test7"></div>
            <div className="test test8"></div>
            <div className="testb "></div>
            <div className="testb test2"></div>
            <div className="testb test3"></div>
            <div className="testb test4"></div>
            <div className="testb test5"></div>
            <div className="testb test6"></div>
            <div className="testb test7"></div>
            <div className="testb test8"></div>
            <div className="testc "></div>
            <div className="testc test2"></div>
            <div className="testc test3"></div>
            <div className="testc test4"></div>
            <div className="testc test5"></div>
            <div className="testc test6"></div>
            <div className="testc test7"></div>
            <div className="testc test8"></div> */}
          </div>
          <div className="bars">
            <div
              className="bar-items"
              style={{ flex: "25%", backgroundColor: "#ff9536" }}
            ></div>
            <div
              className="bar-items"
              style={{ flex: "25%", backgroundColor: "#33b6f2" }}
            ></div>
            <div
              className="bar-items"
              style={{ flex: "25%", backgroundColor: "#0c8412" }}
            ></div>
            <div
              className="bar-items"
              style={{ flex: "25%", backgroundColor: "#beb5e4" }}
            ></div>
          </div>
          <div className="bar-white"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
