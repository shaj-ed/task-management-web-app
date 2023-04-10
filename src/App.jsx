import React, { useEffect, useState } from "react";
import Aside from "./components/Aside";
import BoardForm from "./components/BoardForm";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [show, setShow] = useState();
  const [showBoard, setShowBoard] = useState(false);
  const [updateBoard, setUpdateBoard] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setShow(window.innerWidth > "767");
    };

    updateScreen();

    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return (
    <>
      <Header
        show={show}
        setShow={setShow}
        showBoard={showBoard}
        setShowBoard={setShowBoard}
        setUpdateBoard={setUpdateBoard}
      />
      <Aside show={show} showBoard={showBoard} setShowBoard={setShowBoard} />
      <Main show={show} />
      {showBoard && (
        <BoardForm
          showBoard={showBoard}
          setShowBoard={setShowBoard}
          updateBoard={updateBoard}
          setUpdateBoard={setUpdateBoard}
        />
      )}
    </>
  );
};

export default App;
