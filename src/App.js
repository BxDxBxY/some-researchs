import { React } from "react";
import CompEffect from "./components/СompEffect";
import CompState from "./components/СompState";
import CompMemo from "./components/CompMemo";
import CompRef from "./components/CompRef";
import CompContext from "./components/CompContext";
import CompReducer from "./components/CompReducer";
import CompRedux from "./components/CompRedux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomeDef.js";
import ThemeProvider from "./components/Context/Themecontext";
import { Provider } from "react-redux";
import { store } from "./components/Redux/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          {/* Context provider!!! */}
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="Compeffect" element={<CompEffect />} />
              <Route path="CompMemo" element={<CompMemo />} />
              <Route path="CompReducer" element={<CompReducer />} />
              {/* <Route path="CompContext" element={<CompContext />} /> */}
              <Route path="CompState" element={<CompState />} />
              <Route path="CompRef" element={<CompRef />} />
              <Route path="CompContext" element={<CompContext />} />
              <Route path="CompReducer" element={<CompReducer />} />
              <Route path="CompRedux" element={<CompRedux />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
