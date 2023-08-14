import FlowDiagram from "../components/FlowDiagram";

function FirstPage(){
    return(
    <>
    <div className="grid">
        <div className="header col-12 border-1"><h4>header</h4></div>
        <div className="content col-12 p-0" style={{height:'575px'}}>
            <div className="grid h-full p-0 m-0">
            <div className="left-panel col-1 border-1 h-full p-0 "><h4 className="m-0 grid-justify-center">Left Panel</h4></div>
            <div className="main-content col-11 h-full grid-justify-center p-0"><FlowDiagram /></div>
            
            </div>
            
        </div>
        <div className="footer col-12 border-1"><h4>Footer</h4></div>
        </div>
    </>
    )
}

export default FirstPage;