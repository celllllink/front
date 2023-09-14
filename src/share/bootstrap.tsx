import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { HashRouter, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

export function bootstrap(main: React.ReactNode) {
  const RootElement = document.getElementById("root");
  if (!RootElement) throw new Error('请在 public/index.html 的 body 中添加 <div id="root"></div>');

  ReactDOM.createRoot(RootElement).render(
    <React.StrictMode>
      <RecoilRoot>
        <ConfigProvider>
          <HashRouter>
            <Routes>{main}</Routes>
          </HashRouter>
        </ConfigProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
}
