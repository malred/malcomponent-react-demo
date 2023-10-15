import style from './Upload.module.css'
import {MalUpload} from 'mal-react-component'

const use = `
import {MalUpload} from 'mal-react-component'
`
const use1 = `
<mal-upload action="http://localhost:9090/upload"></mal-upload>
`

const other = `action: 文件上传目标地址`
const other1 = `onSuccess(res): 文件上传成功后操作`
const other2 = `onError(err): 文件上传失败后操作`
const other3 = `onUpload(file,uploads,uploadIdx): 用户自定义文件上传操作,file是上传的文件,uploads和uploadIdx用于控制进度条样式`
const other4 = `使用组件默认封装的上传操作需要传递action,按需传递onSuccess/onError/authorization`
const other5 = `默认上传接口使用file参数名携带文件`

const others = [
    other,
    other1,
    other2,
    other3,
    other4,
    other5,
]
export const UploadPage = () => {
    return (
        <>
            <div className={style.title}>导入</div>
            <div className={style.codes}>
                {
                    [use, use1].map(u => (<div key={u}>
                            <code>
                                {u}
                            </code>
                        </div>
                    ))
                }
            </div>
            <div className={style.codes}>
                {
                    others.map(u => (<div key={u}>
                            <code>
                                {u}
                            </code>
                        </div>
                    ))
                }
            </div>
            <div className={style.center}>
                <div className={style.upl}>
                    <MalUpload action="http://localhost:9090/upload"></MalUpload>
                </div>
            </div>
        </>
    )
}