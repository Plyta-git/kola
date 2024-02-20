import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={() => ({
      html: {
        height: "100%",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto, sans-serif",
        fontSize: "20px",
        backgroundColor: "#303841",
        color: "#eeeeee",
        "-webkit-user-select": 'none',
        "-ms-user-select": 'none',
        "user-select": 'none',
      },
    })}
  />
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {globalStyles}

    <App />
  </React.StrictMode>
);
