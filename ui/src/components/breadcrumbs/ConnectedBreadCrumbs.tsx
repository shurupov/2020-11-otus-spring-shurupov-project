import {connect} from "react-redux";
import {Breadcrumbs} from "./BreadCrumbs";

const mapStateToProps = (storeState: any) => {
    return {
        purchaseName: storeState.purchase.name
    }
};

export const ConnectedBreadCrumbs = connect(mapStateToProps)(Breadcrumbs);