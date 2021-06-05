import React from "react";

import { connect } from "react-redux";
import { AppState } from "../../store/model";

// import "./dashboard.css";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const AllFotosComponent: React.FC<ConnectedState> = ({}) => {
  return <>alll</>;
};

export const AllFotos = connect(mapStateToProps)(AllFotosComponent);
