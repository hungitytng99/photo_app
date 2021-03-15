import "./Loading.scss"
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import React from "react";
const override = css`
  display: block;
  margin: auto;
  border-color: red;
`;

class Loading extends React.Component{
  render(){
    return (
        <div className="background-loading">
          <PuffLoader css={override} size={150} />
        </div>
    );
  }
  
}

export default Loading;