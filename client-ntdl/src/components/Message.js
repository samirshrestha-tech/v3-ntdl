import React from "react";

export const Message = ({ resp }) => {
  //   const { data } = resp;
  const { data } = resp;

  const classnam =
    data?.status === "success" ? " alert alert-success" : "alert alert-danger";
  return <div className={classnam}>{data?.message}</div>;
};
