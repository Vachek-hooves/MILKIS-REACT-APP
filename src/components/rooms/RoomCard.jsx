import { BookNowBtn } from "../BookNowBtn/BookNowBtn"
import style from './Room.module.css'

export const RoomCard = (props) => {
    const { title, facilities, price, img } = props.item
    const imaPath = `${process.env.PUBLIC_URL}/img/${img}`
    const facilitiesArr = Object.entries(facilities)
    return (
        <div className={style.roomCard__wrapper}>
            <div className={style.roomCard__descr}>
                <h2 className={style.roomCard__title}>
                    {title}
                </h2>
                <ul className={style.roomCard__facilities}>
                    {facilitiesArr.map(item => 
                        <li className={style.roomCard__item}>
                                {item[1]} {item[0]}
                        </li>
                    )}
                </ul>
                <p className={style.roomCard__price}>
                    {price} USD per night
                </p>
                <BookNowBtn/>
            </div>
            <div className="room-card__picture">
                <div className="room-card__img-wrapper">
                    <picture>
                        <source />
                        <img 
                            className="room-card__img"
                            src={imaPath} 
                            alt={img} />
                    </picture>
                </div>
            </div>
        </div>
    )
}