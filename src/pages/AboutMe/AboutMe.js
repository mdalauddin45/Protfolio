import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div id="about" class="iknow_tm_main_section">
        <div class="iknow_tm_about">
          <div class="left">
            <div class="left_inner">
              <div class="image">
                <img src="img/thumbs/35-44.jpg" alt="" />
                <div class="main" data-img-url="img/PIC/92620825.png"></div>
              </div>
              <div class="details">
                <ul>
                  <li>
                    <h3>Name</h3>
                    <span>Ala Uddin</span>
                  </li>
                  <li>
                    <h3>Birthday</h3>
                    <span>Novembar 12, 2000</span>
                  </li>
                  <li>
                    <h3>Mail</h3>
                    <span>
                      <a>mdalauddin8948@gmail.com</a>
                    </span>
                  </li>
                  <li>
                    <h3>Phone</h3>
                    <span>+8801845959145</span>
                  </li>
                  <li>
                    <h3>Address</h3>
                    <span>4370, Chandanish, Chittagong</span>
                  </li>
                  <li>
                    <h3>Nationality</h3>
                    <span>Bangladeshi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="iknow_tm_main_title">
              <span>About Me</span>
              <h3>Junior Web Developer</h3>
            </div>
            <div class="bigger_text">
              <p> Creative Web Developer From Bangladesh</p>
            </div>
            <div class="text">
              <p>
                Hi! My name is Ala Uddin. I'm a Junior Web Developer based in
                Bangladesh, and I'm very passionate and dedicated to my
                work.With 6 months of experience as a professional web
                developer, I have acquired the skills and knowledge necessary to
                make your project a success. I enjoy every step of the design
                process, from discussion and collaboration.
              </p>
            </div>
            <div class="iknow_tm_button">
              <a
                type="button"
                href="https://drive.google.com/u/0/uc?id=1zYmz80jpaKnQpuI-ZOs0nh4O36amud5d&export=download"
                className=" hover:font-bold hover:text-white rounded-full hover:bg-gradient-to-r hover:from-emerald-500 hover:to-lime-500"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
