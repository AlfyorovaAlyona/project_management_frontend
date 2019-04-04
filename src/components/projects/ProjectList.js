import React from 'react';
import ProjectItem from './ProjectItem'

let projectItems = [
    {
        id: 1,
        creatorId: 1,
        description: "work",
        status: 0,
        deadline: "2019-03-31 23:00:43.573000"
    }
];

const ProjectList = (props) => {
    return (
        <div>
            <ProjectItem id={projectItems[0].id} creatorId={projectItems[0].creatorId} description={projectItems[0].description}
            status={projectItems[0].status} deadline={projectItems[0].deadline}/>
        </div>
    )
};

export default ProjectList