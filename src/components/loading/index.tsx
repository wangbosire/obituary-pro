import React from "react";
import LoadingImage1 from "../../assets/images/loading-1.png";
import LoadingImage2 from "../../assets/images/loading-2.png";
import "../../assets/style/components/loading.less";

interface LoadingComponentProps {
  loading?: boolean
}

const LoadingComponent: React.FC<LoadingComponentProps> = (
  { children, loading }
) => {
  const renderView = (
    loading ? (
      <div id="app-loading">
        <div className="loading-image">
          <img className="loading-image-1" src={LoadingImage1} alt=""/>
          <img className="loading-image-2" src={LoadingImage2} alt=""/>
        </div>
      </div>
    ) : children
  );
  return <>{renderView}</>
}

export default LoadingComponent
