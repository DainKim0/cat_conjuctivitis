import React from "react";
import styled from "styled-components";

const ErrorMessageBox = styled.ul`
  all: unset;
  font-size: 16px;
  color: #ff0a0a;
  background: white;
  border-radius: 0 0 10px 10px;
  padding: 10px;

  & > li {
    list-style: none;
  }
`;

export default function ShowErrorMessage({ errorMessage }) {
  return (
    <>
      {Object.keys(errorMessage).length > 0 && (
        <ErrorMessageBox>
          {Object.keys(errorMessage).map((type) => (
            <li>
              {type} : {errorMessage[type]}
            </li>
          ))}
        </ErrorMessageBox>
      )}
    </>
  );
}
