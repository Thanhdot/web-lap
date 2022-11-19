import React from "react";
import "./Cv.css";
import logo from "../assets/123.jpg";
import { BsCalendarCheck, BsPhone, BsGithub } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { GiGamepad } from "react-icons/gi";
import { BiFootball } from "react-icons/bi";
import { FaGuitar } from "react-icons/fa";
import { TiPlane } from "react-icons/ti";

const Cv = () => {
  return (
    <div className="bdy">
      <div className="container">
        <div className="top">
          <div className="imgbx">
            <div className="box">
              <img src={logo} className="duy" alt="" />
            </div>
          </div>
          <div className="profile">
            <h3>
              Nguyen Thanh <br /> <span>FE Developer</span>
            </h3>
          </div>

          <div className="contentBox">
            <div className="leftSide">
              <h3>Information</h3>
              <ul>
                <li>
                  <span className="icon">
                    <BsCalendarCheck />
                  </span>
                  <span className="text">26-03-2001</span>
                </li>
                <li>
                  <span className="icon">
                    <BsPhone />
                  </span>
                  <span className="text">039517576</span>
                </li>
                <li>
                  <span className="icon">
                    <GoLocation />
                  </span>
                  <span className="text">
                    29 Le Duc Tho, 6 Wards, Go Vap district
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <FiMail />
                  </span>
                  <span className="text">19522233@gm.uit.edu.vn</span>
                </li>
                <li>
                  <span className="icon">
                    <BsGithub />
                  </span>
                  <span className="text">https://github.com/Thanhdot</span>
                </li>
              </ul>

              <h3>Education</h3>
              <ul className="education">
                <li>
                  <h5>2007-2012</h5>
                  <h4>Student</h4>
                  <h6>Nguyen Hue Primary School</h6>
                </li>
                <li>
                  <h5>2012-2016</h5>
                  <h4>Student</h4>
                <h6>Tran Quang Dieu Secondary School</h6>
                </li>
                <li>
                  <h5>2016-2019</h5>
                  <h4>Student</h4>
                  <h6>Tran Dai Nghia High School</h6>
                </li>
                <li>
                  <h5>2019-2022</h5>
                  <h4>Student</h4>
                  <h6>University Of Information Technology</h6>
                </li>
              </ul>

              <h3>Language</h3>
              <ul className="language">
                <li>
                  <span className="text">Vietnamese</span>
                  <span className="percent">
                    <div className="wi"></div>
                  </span>
                </li>
                <li>
                  <span className="text">English</span>
                  <span className="percent">
                    <div className="wi2"></div>
                  </span>
                </li>
              </ul>

              <h3>Hobbies</h3>
              <ul className="interest">
                <li>
                  <span className="icon">
                    <GiGamepad />
                  </span>
                  <span>Gaming</span>
                </li>
                <li>
                  <span className="icon">
                    <BiFootball />
                  </span>
                  <span>Football</span>
                </li>
                <li>
                  <span className="icon">
                    <FaGuitar />
                  </span>
                  <span>Guitar</span>
                </li>
                <li>
                  <span className="icon">
                    <TiPlane />
                  </span>
                  <span>Traveling</span>
                </li>
              </ul>
            </div>

            <div className="rightSide">
              <div className="about">
                <h3>Profile</h3>
                <p>
                My name is Nguyen Thanh. I’m 22 years old and I’m single. I got 3 month experience as an internship at A company. I like reading books and soccer. I’m a careful and hard-working person. I easily adapt to with new working environment and take initiative in work. With the knowledge of what's in the school and courses. I've always wanted to become Front-end Developer. I have a little knowledge of HTML,CSS,JS and a little bit about ReactJs and plus skills I hone everyday. I always want to give my best to help the company grow and archieve for myself.
                </p>
              </div>

              <div className="about">
                <h3>Experience</h3>
                <div className="box">
                  <div className="year_company">
                    <h5>2021</h5>
                    <h5>Classin</h5>
                  </div>
                  <div className="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>

                <div className="box">
                  <div className="year_company">
                    <h5>2021</h5>
                    <h5>Classin</h5>
                  </div>
                  <div className="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>

                <div className="box">
                  <div className="year_company">
                    <h5>2021</h5>
                    <h5>Classin</h5>
                  </div>
                  <div className="text">
                    <h4>Sales, Develop Game Staff</h4>
                    <p>
                      Main responsibility: Developing games in English on
                      Powerpoint platform. Introduce, consult and answer
                      customer inquiries via phone, email.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about_skill">
                <h3>Skills</h3>
                <div className="box">
                  <h4>Html</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>

                <div className="box">
                  <h4>Css</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>

                <div className="box">
                  <h4>Js</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>

                <div className="box">
                  <h4>ReactJs</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>

                <div className="box">
                  <h4>NodeJs</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>

                <div className="box">
                  <h4>MongoDb</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>

                <div className="box">
                  <h4>Firebase</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>

                <div className="box">
                  <h4>Bootstrap</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>

                <div className="box">
                  <h4>TailwindCss</h4>
                  <span className="percent">
                    <div className="as"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
