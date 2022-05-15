import React from "react";
import Banner from "./Banner";
import Jobs from "./Jobs";

class Home extends React.Component {
    render(){
        return(
            <>
            <Banner/>
            <Jobs/>
            </>
        );
    }
}
export default Home;