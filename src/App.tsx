import React, { Suspense } from "react";
import "./App.css";
import "./styles/index.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Router } from "./routes/Router";

const App = () => {
  return (
    <>
    <Suspense fallback={<>loading...</>}>
      <Router />
    </Suspense>
  </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
