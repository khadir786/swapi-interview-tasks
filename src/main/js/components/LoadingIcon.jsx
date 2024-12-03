import React from "react";

export default function LoadingIcon({ center }) {
    return (
        <div
            className="loading"
            style={
                center
                    ? { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }
                    : {}
            }
        >
            <div className="spinner-border" role="status">
                {/* <span className="sr-only">Loading</span> */}
            </div>
        </div>
    );
}
