import React from "react";
import { AppState } from "../store/model";
import { connect } from "react-redux";



interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const DashboardComponent: React.FC<ConnectedState> = ({}) => {
  return <div>2r4r34r</div>
};

export const DashboardPage = connect(mapStateToProps)(DashboardComponent);
