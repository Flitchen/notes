import React from 'react';

function InformationSystemManagement() {
    return (
        <>
            <div className="h4 text-center my-5">Information System Management</div>

            <div className="list-group list-group-numbered list-group-flush mx-5 mb-3">
                <div className="display-6 text-muted text-center mb-2">Slides and Pdfs</div>
                <a href="course content ict 229.doc" class="list-group-item list-group-item-action">Course outline</a>
                <a href="MIS.pptx" class="list-group-item list-group-item-action">Information Systems and Telecommunication</a>

                <div className="display-6 text-muted text-center mt-3 mb-2">Text Books</div>
                <a href="3.0 - Managing.Information.Technology.7th.Edition.0132146320.pdf" class="list-group-item list-group-item-action">Managing Information Technology</a>
                <br />
            </div>

        </>
    );
}

export default InformationSystemManagement;