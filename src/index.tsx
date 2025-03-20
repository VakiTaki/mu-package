import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyButton from "./MyButton";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyButton label={"Тест кнопки"} onClick={() => console.log("here")} />
  </StrictMode>
);
