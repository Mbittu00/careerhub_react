import React, { useState } from "react";
import "./find.css";
import { CiBookmark, CiLocationOn, CiSaveUp1, CiSearch } from "react-icons/ci";
import { Card } from "./Card";
import axios from "axios";
export const Find = () => {
  let [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [main, setMain] = useState([]);
  let search = async () => {
    let uri = `https://careerhub-4d46.onrender.com/opportunities?location=${location}&opportunity_type=${job}`;
    let { data } = await axios.get(uri);
    console.log(data)
    setMain(data);
  };
  return (
    <div className="find">
      <div className="one">
        <span>find your dream job</span>

        <div className="inputholder">
          <div className="input">
            <CiSearch size={20} color="gray" />
            <input
              type="text"
              placeholder="Search for a job"
              value={job}
              onChange={(e) => {
                setJob(e.target.value);
              }}
            />
            <CiLocationOn size={20} color="gray" />
            <input
              type="text"
              placeholder="enter a location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>

          <button onClick={search}>search</button>
        </div>
      </div>

      <div className="cholder">
       {
        main.map((e)=>(
          <Card data={e} />
        ))
       }
      </div>
    </div>
  );
};
