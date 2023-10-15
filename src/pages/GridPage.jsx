import {MalGrid, MalGridItem} from "mal-react-component";
import style from './GridPage.module.css'

const use = `
import {MalGrid,MalGridItem} from "mal-react-component";
`

const code1 = `<MalGrid gap="2" cols="4">`
const code2 = `    <MalGridItem class={style.item col_full>111</MalGridItem>`
const code3 = `    <MalGridItem class={style.item col_span="3">111</MalGridItem>`
const code4 = `    <MalGridItem class={style.item>111</MalGridItem>`
const code5 = `    <MalGridItem class={style.item col_span="2">111</MalGridItem>`
const code6 = `    <MalGridItem class={style.item>111</MalGridItem>`
const code7 = `    <MalGridItem class={style.item>111</MalGridItem>`
const code8 = `    <MalGridItem class={style.item>111</MalGridItem>`
const code9 = `    <MalGridItem class={style.item>111</MalGridItem>`
const code10 = `   <MalGridItem class={style.item>111</MalGridItem>`
const code11 = `   <MalGridItem class={style.item>111</MalGridItem>`
const code12 = `</MalGrid>`
const codes1 = [
    code1,
    code2,
    code3,
    code4,
    code5,
    code6,
    code7,
    code8,
    code9,
    code10,
    code11,
    code12,
]

const code21 = `<MalGrid  gap="2" cols="3" rows="4">`
const code22 = `    <MalGridItem class={style.item row_full>111</MalGridItem>`
const code23 = `    <MalGridItem className={style.item row_span="3">111</MalGridItem>`
const code24 = `    <MalGridItem className={style.item row_span="2">111</MalGridItem>`
const code25 = `    <MalGridItem className={style.item>111</MalGridItem>`
const code26 = `    <MalGridItem className={style.item>111</MalGridItem>`
const code27 = `    <MalGridItem className={style.item>111</MalGridItem>`
const code28 = `</MalGrid>`
const codes2 = [
    code21,
    code22,
    code23,
    code24,
    code25,
    code26,
    code27,
    code28,
]

const code = `<MalGrid cols="2" gapX="12" gapY="24">...</MalGrid>`
export const GridPage = () => {
    return (
        <>
            <div className={style.title}>导入</div>
            <div className={style.codes}>
                <div className="">
                    <code>
                        {use}
                    </code>
                </div>
            </div>

            <div className={style.title}>指定元素所占列数</div>
            <MalGrid className={style.gridContainter} gap="2" cols="4">
                <MalGridItem className={style.item} col_full>111</MalGridItem>

                <MalGridItem className={style.item} col_span="3">111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>

                <MalGridItem className={style.item} col_span="2">111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>

                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
            </MalGrid>
            <div className={style.codes}>
                {
                    codes1.map((item) => (
                        <div key={item}>
                            <code>{item}</code>
                        </div>
                    ))
                }
            </div>

            <div className={style.title}>指定元素所占行数</div>
            <MalGrid className={style.gridContainter} gap="2" cols="3" rows="4">
                <MalGridItem className={style.item} row_full>111</MalGridItem>
                <MalGridItem className={style.item} row_span="3">111</MalGridItem>
                <MalGridItem className={style.item} row_span="2">111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
            </MalGrid>
            <div className={style.codes}>
                {
                    codes2.map((item) => (<div key={ item}>
                            <code>{item}</code>
                        </div>
                    ))
                }
            </div>

            <div className={style.title}>指定元素之间的间隔</div>
            <MalGrid className={style.gridContainter} cols="2" gapX="12" gapY="24">
                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
                <MalGridItem className={style.item}>111</MalGridItem>
            </MalGrid>
            <div className={style.codes}>
                <div>
                    <code>{code}</code>
                </div>
            </div>
            <div className={style.last}></div>
        </>
    )
}