import React, { useState } from "react";
import user from "./user.png";
import users from "./users.png";
import "./PageThree.css";

const PageThree = ({ onButtonClick }) => {
  // State to manage single user selection
  const [singleUser, setSingleUser] = useState(false);

  // State to manage multi-user selection
  const [multiUser, setMultiUser] = useState(false);

  // Array of objects containing information about each person
  const [persons, setPersons] = useState([
    { id: 1, name: "👨 Self", selected: false, image: user },
    { id: 2, name: "👦 Son", selected: false, image: user },
    { id: 3, name: "👧 Daughter", selected: false, image: user },
    { id: 4, name: "👩 Spouse", selected: false, image: user },
    { id: 5, name: "👴 Father", selected: false, image: user },
    { id: 6, name: "👵 Mother", selected: false, image: user },
    { id: 7, name: "👴🏻Father-in-law", selected: false, image: user },
    { id: 8, name: "👵🏻 Mother-in-law", selected: false, image: user },
    // Add more persons as needed
  ]);

  // Function to toggle person selection
  const handlePersonClick = (id) => {
    setPersons((prevPersons) =>
      prevPersons.map((person) =>
        person.id === id ? { ...person, selected: !person.selected } : person
      )
    );
  };

  // Function to toggle single user selection
  const onClickSingleUser = () => {
    setSingleUser((prevSingleUser) => !prevSingleUser);
  };

  // Function to toggle multi-user selection
  const onClickMultiUser = () => {
    setMultiUser((prevMultiUser) => !prevMultiUser);
  };

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "100%", maxHeight: "25%", margin: "auto" }}>
      <h2>Who are the lucky ones getting the health protection?</h2>
      <p style={{ color: "#C0C0C0" }}>
        Select the people whom you wish to include in the health insurance
        package.
      </p>
      <div
        className="center ph4 selectionDiv "
        style={{ width: "100%", height: "80%" }}>
        {persons.map((person) => (
          <div
            key={person.id}
            className="clicked person-div"
            style={{ borderColor: person.selected ? "#664DE5" : "#EAEEF5" }}
            onClick={() => handlePersonClick(person.id)}>
            <h1 className="person-heading">{person.name}</h1>
          </div>
        ))}
      </div>
      <input
        className="f6 grow br2 ph3 pv2 mb2 dib white submitButton !w-fit mt-[24px]"
        style={{
          borderStyle: "none",
          width: "66%",
          backgroundColor: "#664DE5",
        }}
        type="submit"
        value="Continue"
        onClick={() => onButtonClick("pagetwo")}
      />
    </main>
  );
};

export default PageThree;
