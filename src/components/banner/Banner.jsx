import React from "react"
import { getData } from "../../hooks/getData"
import style from './Banner.module.css'

export const Banner = ({ section }) => {
    const url = `${process.env.PUBLIC_URL}/data/banner.json`
    const [banner, setBanner] = React.useState([]);

    React.useEffect(() => {
        getData(url)
            .then(data => {
                setBanner(data.filter(item => item.title === section))
            })
            .catch(error => console.error(error));
    }, [])

    return (banner.map(item => {
        return (
            <div className={style.banner__wrapper}>
                <div className={style.banner__imgWrapper}>
                    <img className={style.banner__img} src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt="banner"/>
                    <div className={style.banner__overlay}></div>
                </div>
                <div className={style.banner__textWrapper}>
                    <h2 className={style.banner__title}>{item.text}</h2>
                    <p className={style.banner__descr}>{item.subtext}</p>
                </div>
            </div>
        )
    }))
}