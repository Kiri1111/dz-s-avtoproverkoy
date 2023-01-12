import s from './Loader.module.css'
import loader from './loader.svg'

export const Loader = () => <div className={s.loader}>{

    <img src={loader} alt="load"/>}</div>
