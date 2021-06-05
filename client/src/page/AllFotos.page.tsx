import React from "react";
import { AppState } from "../store/model";
import { connect } from "react-redux";
import { UserDashboard } from "../components/dashboard/userDashboard";
import { AdminDashboard } from "../components/dashboard/adminDashboard";
import { LoadingComponent } from "../components/loading";
import { AllFotosComponent } from "../components/allFotos/allFotos";

interface ConnectedState {
  admin?: boolean;
  firstName?: String;
}

const mapStateToProps = (state: AppState) => ({
  admin: state.auth.admin,
  firstName: state.auth.firstName,
});

export const AllSotosComponent: React.FC<ConnectedState> = ({
  admin,
  firstName,
}) => {
  return <AllFotosComponent />;
};

export const AllFotosPage = connect(mapStateToProps)(AllSotosComponent);
