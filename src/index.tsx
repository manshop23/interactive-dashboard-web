import * as React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    fontFamily: ["Prompt"].join(","),
  },
})
ReactDOM.render(
  <React.Fragment>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
)
