import {connect} from "react-redux";
import {TopMenu} from "./TopMenu";

const mapStateToProps = (storeState: any) => {
    let selected = "";
    const location: string = storeState.router.location.pathname;
    if (location.substr(0, 10) == "/purchases") {
        selected = "purchases";
    } else if (location.substr(0, 5) == "/auth") {
        selected = "auth";
    }
    return {
        selected
    }
};

export const ConnectedTopMenu = connect(mapStateToProps)(TopMenu);