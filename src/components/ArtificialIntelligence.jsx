import React from 'react';

function ArtificialIntelligence() {
    return (
        <>
            <div className="h4 text-center my-5">Fundamentals of Artificial Intelligence</div>
            <div className="list-group list-group-numbered list-group-flush mx-5 mb-3">

                <div className="display-6 text-muted text-center mb-2">Slides and Pdfs</div>
                <a href="Course outline.pdf" class="list-group-item list-group-item-action">Course outline</a>
                <a href="L1 (chapter 1 and 2).pptx" class="list-group-item list-group-item-action">Fundamentals of Artificial Intelligence (<span className="text-warning">Chapter 1&2</span>)</a>
                <a href="L2 (chapter 3).pptx" class="list-group-item list-group-item-action">Problem Solving (<span className="text-warning">Chapter 3</span>)</a>
                <a href="L3 (chapter 4) Group work-and-presentation.pptx" class="list-group-item list-group-item-action">Knowledge, reasoning and planning (<span className="text-warning">Chapter 4</span>)</a>
                <a href="L5 (chapter 6).pptx" class="list-group-item list-group-item-action">Learning (<span className='text-warning'>Chapter 6</span>)</a>
                <a href="L6 (chapter 7).pptx" class="list-group-item list-group-item-action">Natural Language Processing (<span className='text-warning'>Chapter 7</span>)</a>

                <div className="display-6 text-muted text-center mt-3 mb-2">Text Books</div>
                <a href="Ref-Artificial IntelligenceE Building Intelligent Systems (Parag Kulkarni, Prachi Joshi).pdf" class="list-group-item list-group-item-action">Artificial Intelligence: Building Intelligent Systems (Reference Book)</a>
                <a href="Markov Decision Processes in Artificial Intelligence (Olivier Sigaud, Olivier Buffet).pdf" class="list-group-item list-group-item-action">Markov Decision Processes in Artificial Intelligence</a>
                <a href="Artificial Intelligence and Machine Learning in Business Management Concepts, Challenges, and Case Studies (Sandeep Kumar Panda (editor) etc.).pdf" class="list-group-item list-group-item-action">Artificial Intelligence and Machine Learning in Business Management</a>

                <br />
            </div>
        </>

    );
}

export default ArtificialIntelligence;