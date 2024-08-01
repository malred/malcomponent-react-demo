import { Mal3DCard } from "../../public/dist-component/mal-react-components.es.js";
import { services } from '../constants';
// import {Mal3DCard} from "mal-react-components";

let code1 = `
            <Mal3DCard index={0}
                       icon={services[0].icon}
                       title={services[0].title}/>
                       `
let code2 = `
            <Mal3DCard index={0}
                       bg={'bg-green-200'}
                       icon={services[0].icon} 
                       title={services[0].title}/>`
let code3 = `
            <Mal3DCard index={0}
                       size={'md'}
                       icon={services[0].icon}
                       title={services[0].title}/>`

const Card3DPage = () => {

    return (
        <div className={'p-4 flex-col gap-12 w-screen h-screen flex items-center justify-center'}>
            {/*{services.map((service, index) => (*/}
            <Mal3DCard
                key={services[0].title} index={0} {...services[0]} />
            {/*))}*/}
            <code className={'bg-amber-200 p-4 rounded-lg'}>{code1}</code>

            <Mal3DCard
                bg={'bg-green-200'}
                key={services[1].title} index={1} {...services[1]} />
            <code className={'bg-amber-200 p-4 rounded-lg'}>{code2}</code>

            <Mal3DCard
                size={'sm'}
                key={services[2].title} index={2} {...services[2]} />

            <Mal3DCard
                size={'md'}
                key={services[2].title} index={2} {...services[2]} />

            <Mal3DCard
                size={'lg'}
                key={services[2].title} index={2} {...services[2]} />
            <code className={'bg-amber-200 p-4 rounded-lg'}>{code3}</code>

            <div></div>
        </div>
    );
};

export default Card3DPage