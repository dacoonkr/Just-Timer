import React from "react";
import { Component } from 'react';

const Page = () => {
  return (
    <>
        <Scramble></Scramble>
        <Content></Content>
    </>
  );
};

class Scramble extends Component {
  render() {
    return (
      <>
        L R2 B2 U2 F2 D' B2 L2 U F2 R2 F2 D' B' R' D B F' L2 D2 B2
      </>
    )
  }
}

class History extends Component {
  render() {
    return (
      <>
        대충 table
      </>
    )
  }
}

class Timer extends Component {
  render() {
    return (
      <div className="Timer">
        OO.
        <span>OO</span>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Timer></Timer>
      </div>
    )
  }
}

export default Page;