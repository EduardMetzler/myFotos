import React from "react";

import { connect } from "react-redux";
import { AppState } from "../../store/model";

// import "./dashboard.css";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const AdminDashboardComponent: React.FC<ConnectedState> = ({}) => {
  return <>admin</>;
};

export const AdminDashboard = connect(mapStateToProps)(AdminDashboardComponent);
