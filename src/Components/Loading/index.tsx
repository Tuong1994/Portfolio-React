import React from "react";

interface LoadingProps {
    isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = (props) => {
    const { isLoading } = props;

    return (
        <div className={`loading ${isLoading ? "loading--active" : ""}`}>
            <div className="loading__wrapper">
                <div className="wrapper__item"></div>
                <div className="wrapper__item"></div>
                <div className="wrapper__item"></div>
                <div className="wrapper__item"></div>
                <div className="wrapper__item"></div>
                <div className="wrapper__item"></div>
                <div className="wrapper__item"></div>
                <div className="wrapper__item"></div>
            </div>
        </div>
    );
};

export default Loading;
