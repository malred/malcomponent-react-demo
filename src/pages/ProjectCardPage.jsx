import {projects} from "../constants";
import {Mal3DProjectCard} from '../../public/dist-component/mal-react-components.es.js'

export default function ProjectCardPage() {

    return (
        <div className={'flex flex-row justify-center'}>
            <div className="mt-20 flex flex-wrap gap-8">
                {projects.map((project, index) => (
                    <Mal3DProjectCard
                        key={`project-${index}`}
                                      index={index} {...project} />
                ))}
            </div>
        </div>
    );
}