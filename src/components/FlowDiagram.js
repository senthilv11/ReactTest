function FlowDiagram(){
    return(
    <div className="flow-diagram">
        <div className="line vertical-line line0"></div>
        <div className="line horizontal-line line1"></div>
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="line vertical-line line2"></div>
        <div className="line horizontal-line line3"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>

        <i className="pi pi-angle-right arrow-1 arrow" style={{ color: 'slateblue' }}></i>
        <i className="pi pi-angle-right arrow-2 arrow" style={{ color: 'slateblue' }}></i>
        <i className="pi pi-angle-down arrow-3 arrow" style={{ color: 'slateblue' }}></i>
        <i className="pi pi-angle-down arrow-4 arrow" style={{ color: 'slateblue' }}></i>
        <i className="pi pi-angle-left arrow-5 arrow" style={{ color: 'slateblue' }}></i>
        <i className="pi pi-angle-up arrow-6 arrow" style={{ color: 'slateblue' }}></i>

    </div>
    )
}

export default FlowDiagram;