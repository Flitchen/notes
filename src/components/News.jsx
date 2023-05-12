import React from 'react';
function News() {
    return (
        <div className='container mt-4'>

            < div class="alert alert-info mt-3 text-center">
                There will be presentations of group assignments concerning Fundamentals of Artificial Intelligence immediately after mid-recess
            </div>
            < div class="alert alert-danger mt-3 text-center">
                Deadline for submitting individual assignment of Information System Management will be on <u>16<sup>th</sup> May 2023</u>
            </div>
            < div class="alert alert-danger mt-3 text-center">
                Deadline for submitting group assignment of Information System Management will be on <u>2<sup>th</sup> June 2023</u>
            </div>
            < div class="alert alert-info mt-3 text-center">
                Group assignment of Operating System should be done with not more than 4 people
            </div>

        </div>
    );
}

export default News;