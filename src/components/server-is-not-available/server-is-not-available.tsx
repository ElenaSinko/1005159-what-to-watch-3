import * as React from "react";

export const ServerIsNotAvailable: React.FunctionComponent = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>
      <h1 className="page-title user-page__title">Не удается установить соединение с сервером</h1>
    </div>
  );
};

