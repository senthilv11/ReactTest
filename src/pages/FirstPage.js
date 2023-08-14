import FlowDiagram from "../components/FlowDiagram";

function FirstPage() {
    return (
        <>
            <div className="grid">
                <div className="header col-12 border-1"><h4>header</h4></div>
                <div className="content col-12 p-0" style={{ height: '575px' }}>
                    <div className="grid h-full p-0 m-0">
                        <div className="left-panel col-1 border-1 h-full p-0 "><h4 className="m-0 grid-justify-center">Left Panel</h4></div>
                        <div className="main-content col-11 h-full grid-justify-start p-0">
                            <h4 className="text-left pl-8">Infographic</h4>
                            <FlowDiagram />
                            <div className="col-12">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="footer col-12 border-1"><h4>Footer</h4></div>
            </div>
        </>
    )
}

export default FirstPage;