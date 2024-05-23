import React from "react";
import "./PageOne.css";

const PageOne = ({ onButtonClick }) => {
  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}>
      <form className="measure">
        <h2>
          Welcome! <br />
          Get your health insured now!
        </h2>
        <p style={{ color: "#C0C0C0" }}>
          Let's start your health insurance scheme with basic details.
        </p>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}>
              Full Name*
            </label>
            <input
              required
              className="f6 br2 ph3 pv2 mb2 dib black w-100 bg-[white]"
              type="text"
              name="full-name"
              id="full-name"
              size="30"
              placeholder="Steve Jobs"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}>
              Email Id*
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100 bg-[white]"
              type="text"
              name="display-name"
              id="display-name"
              placeholder="user@site.domain"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
        </fieldset>
        <div>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#664DE5",
            }}
            type="submit"
            value="Continue"
            onClick={() => onButtonClick("pagethree")}
          />
        </div>
      </form>
    </main>
  );
};

export default PageOne;
