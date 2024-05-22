import Logo from "./../Components/Pages/Logo/Logo";

import React, { useState } from "react";
import tachyons from "tachyons";
import PageOne from "../Components/Pages/PageOne/PageOne";
import PageTwo from "../Components/Pages/PageTwo/PageTwo";
import PageThree from "../Components/Pages/PageThree/PageThree";
import PageFour from "../Components/Pages/PageFour/PageFour";
import MultiStepProgressBar from "../Components/Pages/MultiStepProgressBar/MultiStepProgressBar";

function Pages() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div className="App">
      <Logo />
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <PageOne onButtonClick={nextPage} />,
          pagetwo: <PageTwo onButtonClick={nextPage} />,
          pagethree: <PageThree onButtonClick={nextPage} />,
          pagefour: <PageFour />,
        }[page]
      }
    </div>
  );
}

export default Pages;
