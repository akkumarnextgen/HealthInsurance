import React from "react";
import "./PageTwo.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PageTwo = ({ onButtonClick }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}>
      <form className="measure">
        <h2>Please enter your age</h2>

        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="left db lh-copy f6 mb1"
              htmlFor="workspace-name"
              style={{ textAlign: "left" }}>
              Workspace Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="workspace-name"
              id="workspace-name"
              size="30"
              placeholder="Eden"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
        </fieldset>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}>
              {[...Array(57).keys()].map((_, index) => (
                <MenuItem key={index} value={index + 19}>
                  {index + 19} years
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <input
          className="f6 grow br2 ph3 pv2 mb2 dib white submitButton !w-fit mt-[24px]"
          style={{
            borderStyle: "none",
            width: "66%",
            backgroundColor: "#664DE5",
          }}
          type="submit"
          value="Continue"
          onClick={() => onButtonClick("pagefour")}
        />
      </form>
    </main>
  );
};

export default PageTwo;
