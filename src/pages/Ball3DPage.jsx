import {Mal3DBall} from "../../public/dist-component/mal-react-components.es.js";
import {technologies} from "../constants";

let code1 = `
            <Mal3DBall icon={technologies[1].icon}/>
`
let code2 = `
        let size = 'sm'
        let size1 = 'md'
        let size2 = 'lg'
        <Mal3DBall key={technologie.name} size={size} icon={technologie.icon}/>
`

const Ball3DPage = () => {
    return (
        <div className="">
            <div className={'mb-4 flex flow-row flex-wrap justify-center gap-10 flex-wrap'}>
                {technologies.map((technologie, index) => {
                    let size
                    if ((index + 1) % 3 === 0) {
                        size = 'sm'
                    } else if ((index + 1) % 2 === 0) {
                        size = 'md'
                    } else {
                        size = 'lg'
                    }
                    return <Mal3DBall key={technologie.name} size={size} icon={technologie.icon}/>
                })}
            </div>
            <div className={'flex flex-col w-full justify-center items-center gap-8'}>
                <div>
                    <code className={'bg-amber-200 p-4 rounded-lg'}>{code1}</code>
                </div>
                <Mal3DBall icon={technologies[0].icon}/>
                <Mal3DBall icon={technologies[1].icon}/>
                <div>
                    <code className={'bg-amber-200 p-4 rounded-lg'}>{code2}</code>
                </div>
            </div>
        </div>
    );
};

export default Ball3DPage

