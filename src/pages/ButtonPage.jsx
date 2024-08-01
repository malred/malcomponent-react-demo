import style from './ButtonPage.module.css'
// import {MalButton} from 'mal-react-component'
import {MalButton} from '../../public/dist-component/mal-react-components.es.js'

const use = `
import {MalButton} from "mal-react-component";
`
const code1 = `<MalButton type="danger">默认</MalButton>`
const code2 = `<MalButton type="success">默认</MalButton>`
const code3 = `<MalButton>默认</MalButton>`
const code4 = `<MalButton type="info">默认</MalButton>`
const code5 = `<MalButton type="warning">默认</MalButton>`
const code6 = `<MalButton type="primary">默认</MalButton>`
const codes1 = [code1, code2, code3, code4, code5, code6]

const code21 = `<MalButton plain type="danger">默认</MalButton>`
const code22 = `<MalButton plain type="success">默认</MalButton>`
const code23 = `<MalButton plain>默认</MalButton>`
const code24 = `<MalButton plain type="info">默认</MalButton>`
const code25 = `<MalButton plain type="warning">默认</MalButton>`
const code26 = `<MalButton plain type="primary">默认</MalButton>`
const codes2 = [code21, code22, code23, code24, code25, code26]


const code31 = `<MalButton round type="danger">危险圆形按钮</MalButton>`
const code32 = `<MalButton round type="success">成功圆形按钮</MalButton>`
const code33 = `<MalButton round>默认</MalButton>`
const code34 = `<MalButton round type="info">默认</MalButton>`
const code35 = `<MalButton round type="warning">默认</MalButton>`
const code36 = `<MalButton round type="primary">默认</MalButton>`
const codes3 = [code31, code32, code33, code34, code35, code36]

const code41 = `<MalButton type="success" lg>成功按钮</MalButton>`
const code42 = `<MalButton type="success" md>成功按钮</MalButton>`
const code43 = `<MalButton type="success">成功按钮</MalButton>`
const code44 = `<MalButton type="success" sm>成功按钮</MalButton>`
const codes4 = [code41, code42, code43, code44]

export const ButtonPage = () => {
    return (
        <>
            <div className={style.main}>
                <div className={style.title}>导入</div>
                <div className={style.codes}>
                    <div className="">
                        <code>
                            {use}
                        </code>
                    </div>
                </div>

                <br/>
                <div className={style.title}>不同类型的按钮</div>
                <MalButton onClick={() => {
                    console.log(1)
                }} className={style.btn} type="danger">默认</MalButton>
                <MalButton className={style.btn} type="success">默认</MalButton>
                <MalButton className={style.btn}>默认</MalButton>
                <MalButton className={style.btn} type="info">默认</MalButton>
                <MalButton className={style.btn} type="warning">默认</MalButton>
                <MalButton className={style.last} type="primary">默认</MalButton>
                <div className={style.codes}>
                    {
                        codes1.map(item => (<div className="" key={item}>
                                <code>{item}</code>
                            </div>)
                        )
                    }
                </div>
                <br/>

                <div className={style.title}>朴素按钮</div>
                <MalButton className={style.btn} plain type="danger">默认</MalButton>
                <MalButton className={style.btn} plain type="success">默认</MalButton>
                <MalButton className={style.btn} plain>默认</MalButton>
                <MalButton className={style.btn} plain type="info">默认</MalButton>
                <MalButton className={style.btn} plain type="warning">默认</MalButton>
                <MalButton className={style.last} plain type="primary">默认</MalButton>
                <div className={style.codes}>
                    {
                        codes2.map(item => (<div className="" key={item}>
                                <code>{item}</code>
                            </div>)
                        )
                    }
                </div>
                <br/>

                <div className={style.title}>圆形按钮</div>
                <MalButton className={style.btn} round type="danger">危险圆形按钮</MalButton>
                <MalButton className={style.btn} round type="success">成功圆形按钮</MalButton>
                <MalButton className={style.btn} round>默认</MalButton>
                <MalButton className={style.btn} round type="info">默认</MalButton>
                <MalButton className={style.btn} round type="warning">默认</MalButton>
                <MalButton className={style.last} round type="primary">默认</MalButton>
                <div className={style.codes}>
                    {
                        codes3.map(item => (<div className="" key={item}>
                                <code>{item}</code>
                            </div>)
                        )
                    }
                </div>
                <br/>

                <div className={style.title}>不同大小的按钮</div>
                <MalButton className={style.btn} type="success" lg>成功按钮</MalButton>
                <MalButton className={style.btn} type="success" md>成功按钮</MalButton>
                <MalButton className={style.btn} type="success">成功按钮</MalButton>
                <MalButton className={style.last} type="success" sm>成功按钮</MalButton>
                <div className={style.codes}>
                    {
                        codes4.map(item => (<div className="" key={item}>
                                <code>{item}</code>
                            </div>)
                        )
                    }
                </div>
                <br/>
            </div>
        </>
    )
}
export default ButtonPage