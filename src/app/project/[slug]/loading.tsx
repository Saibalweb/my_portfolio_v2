import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="animate-pulse text-3xl text-foreground">Loading...</div>
    </div>
  );
};

export default loading;
