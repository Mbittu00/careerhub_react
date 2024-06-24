import React from "react";
import { GoArrowRight, GoBriefcase } from "react-icons/go";
import "./oppo.css";
import { BsCalendarDate } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
export const Oppo = () => {
  return (
    <div className="oppo">
      <div className="upholder">
        <div className="upper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC0EOkc3CPm-YTR1IbXFcdW5hgA7sChiEVIcACZDFYw&s"
            alt=""
            srcset=""
          />
          <div>
            <span>figma</span>
            <span>design</span>
          </div>
        </div>
        <div className="btn">
          <span>apply now</span>
          <GoArrowRight />
        </div>
      </div>

      <div className="mid">
        <span className="title">job description</span>
        <span className="dec">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque nesciunt repudiandae corrupti velit! Blanditiis id similique minima! Perferendis aspernatur iste nisi aut fugiat ad, modi iusto molestiae autem id natus ut minus. Architecto possimus nisi saepe consequuntur, voluptatum vitae, incidunt eveniet minus optio neque ipsam excepturi molestiae numquam? Ex cumque, veritatis velit autem doloremque iusto nihil ducimus architecto aliquam non iure praesentium odit, quam in deserunt animi maxime quod voluptatem facilis sed neque. Veritatis neque laboriosam nesciunt fuga. Odio atque possimus maxime, reiciendis sapiente magnam fugit laboriosam corrupti quibusdam?
        </span>
      </div>

      <div className="lower">
        <span className="title">job requirements</span>
        <ul>
            <li>react</li>
            <li>nodejs</li>
            <li>expressjs</li>
            <li>javascript</li>
            <li>html</li>
            <li>css</li>
        </ul>
      </div>

      <div className="lower">
        <span className="title">job preferred skills</span>
        <ul>
            <li>react</li>
            <li>nodejs</li>
            <li>expressjs</li>
            <li>javascript</li>
            <li>html</li>
            <li>css</li>
        </ul>
      </div>

      <div className="lower">
        <span className="title">job preferred experience</span>
        <ul>
            <li>react</li>
            <li>nodejs</li>
            <li>expressjs</li>
            <li>javascript</li>
            <li>html</li>
            <li>css</li>
        </ul>
      </div>

      <div className="box">
        <span className="title">job overview</span>
        <div className="holder">

        <div>
        <BsCalendarDate />
            <span className="title">job post</span>
            <span className="value">12.0.2024</span>
        </div>

        <div>
        <CiLocationOn />
            <span className="title">job location</span>
            <span className="value">west bengal</span>
        </div>


        <div>
        <FaRegCalendarTimes />
            <span className="title">end date</span>
            <span className="value">12.0.2024</span>
        </div>

        <div>
        <GoBriefcase />
            <span className="title">opportunity type</span>
            <span className="value">west bengal</span>
        </div>

        <div>
        <MdOutlineCurrencyRupee />
            <span className="title">salary range</span>
            <span className="value">west bengal</span>
        </div>

        </div>
      
      </div>
    </div>
  );
};
