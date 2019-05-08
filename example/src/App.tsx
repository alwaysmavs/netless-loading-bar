import * as React from "react";
import TopLoadingBar from "@netless/loading-bar";
import "./App.less";

export type AppStates = {
    currentTime: number;
};

export default class App extends React.Component<{}, AppStates> {

    private setInte: any;
    public constructor(props: {}) {
        super(props);
        this.state = {
            currentTime: 10,
        };
    }


    public componentDidMount(): void {
        this.setInte = setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime < 100 ? this.state.currentTime + 1 : 0,
            });
        }, 100);
    }

    public componentWillUnmount(): void {
        clearInterval(this.setInte);
    }

    private getSlider(): React.ReactNode {
        return <TopLoadingBar loadingPercent={this.state.currentTime}/>;
    }

    public render(): React.ReactNode {
        return (
            <div className="container">
                <h1>React top loading bar</h1>
                {this.getSlider()}
            </div>
        );
    }
}
