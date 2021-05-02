import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import InformationView  from "../components/InformationView";
import FormController from "../components/FormController";

export interface BoxFormViewState {
    boxForm: any;
}

class BoxFormView extends Component<{}, BoxFormViewState> {
    constructor(props: any) {
        super(props);
        this.state = { boxForm: {} };
    }

    componentDidMount() {
    }


    render() {

        return (
            <Box display="flex" height="100vh" className="container">
                <InformationView />
                <FormController />
            </Box>
        );
    }
}

export default BoxFormView;