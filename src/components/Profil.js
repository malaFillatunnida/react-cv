import React from "react";
import "./Profil.css";
import { Image } from "react-bootstrap";

const Profil = () => {
  return (
    <div class="all" style={{ padding: "40px" }}>
      <div class="head">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBNdcMDNS2r9df1IWFVc8AY0QNtfNhEJv7fGS5TdhUWrlBqfGu1PCCn9lKpL-FqF9dWc&usqp=CAU"
          style={{
            border: "5px solid white",
            borderRadius: "100%",
            width: "220px",
            height: "220px",
            marginTop: "20px",
          }}
        />
      </div>
      <h1 style={{ marginTop: "-21px" }}>
        <mark
          style={{
            backgroundColor: "	wheat",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {" "}
          MALA FILLATUNNIDA{" "}
        </mark>
      </h1>
      <p>
        Mala Fillatunnida | Rembang, 17 October 2005 | +62 882 2756 1234 |
        Pancur Village, Pancur Sub-District, Rembang District, Central Java
        Province
      </p>
      <hr style={{ border: "1px solid rgb(136, 115, 87)" }} />

      <div class="border3">
        <h2>PROFILE</h2>
        <p>
          <b>NAME</b>
        </p>
        <p>Mala Fillatunnida</p>
        <p>
          <b>DATE OF BIRTH</b>
        </p>
        <p>Rembang, 17 October 2005</p>
        <p>
          <b>ADDRESS</b>
        </p>
        <p>
          Pancur Village, Pancur Sub-District, Rembang District, Central Java
          Province
        </p>
        <h2>CONTACT</h2>
        <p>
          <b>&#9742; HOME NUMBER </b>
        </p>
        <p>(0411) 123 667</p>
        <p>
          <b>&#x1F4DE; PHONE NUMBER </b>
        </p>
        <p>+62 88227561539</p>
        <p>
          <b> &#x1F4E7; EMAIL</b>
        </p>
        <p>malafillatunnidagmail.com</p>

        <h2>SOCIAL</h2>
        <p>
          <b>TWITTER</b>
        </p>
        <p>@malafilla</p>
        <p>
          <b>FACEBOOOK </b>
        </p>
        <p>mala_filla</p>
      </div>

      <div class="border4">
        <div id="p">
          <h2>SUMMARY</h2>
          My name is Mala Fillatunnida. I was born in Rembang on October 17,
          2005. My height is about 165 cm and my weight is 47 kg. My hobbies are
          reading and singing. Now, I am sitting in class 10 of SMK Bina
          Nusantara Mranggen, Demak. I am 16 years old. I am the last child of 3
          siblings.
        </div>
        <br />
        <div id="p">
          <h2>EDUCATIONAL BACKGROUND</h2>
          <p>
            <b>2010 - 2012</b> : TK Kartika Sari
          </p>
          <p>
            <b>2012 - 2018</b> : MI Al - Hamidiyyah
          </p>
          <p>
            <b>2018 - 2021</b> : SMP N 1 Pancur
          </p>
        </div>
        <br />

        <div id="p" style={{ height: "180px" }}>
          <h2>ACHIEVEMENT</h2>
          <div class="ac">
            <h3>COMPETITION 2016</h3>
            <p>
              1st winner of the Quran reading competition at the Pancur District
              level (2016).
            </p>
          </div>
          <div class="ac">
            <h3>COMPETITION 2016</h3>
            <p>
              3rd place in the Rembang District level Quran reading competition
              (2016).
            </p>
          </div>
          <div class="ac">
            <h3>COMPETITION 2018</h3>
            <p>
              1st winner of the Quran reading competition at the Pancur District
              level (2018).
            </p>
          </div>
        </div>
        <br />
        <div id="p">
          <h2>SKILLS</h2>
          <div class="skil">
            <h3>PROFESSIONAL SKILLS</h3>
            <p>Writing Book &nbsp; &#9899; &#9899; &#9899;</p>
            {/* <p>Reading Book &nbsp; &#9899; &#9899; &#9899;</p> */}
            <p>Communication &nbsp; &#9899; &#9899; &#9899;</p>
          </div>

          <div class="skil">
            <h3>PERSONAL SKILLS</h3>
            <p>Organization &nbsp; &#9899; &#9899; &#9899;</p>
            <p>Commitment &nbsp; &#9899; &#9899; &#9899;</p>
            {/* <p>Multitasking &nbsp; &#9899; &#9899; &#9899;</p> */}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Profil;
