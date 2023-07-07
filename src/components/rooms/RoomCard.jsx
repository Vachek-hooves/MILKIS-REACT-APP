export const RoomCard = (props) => {
    const { title, facilities, price, img } = props.item
    const imaPath = `${process.env.PUBLIC_URL}/img/${img}`
    const facilitiesArr = Object.entries(facilities)
    return (
        <div className="room-card__wrapper">
            <div className="room-card__descr">
                <h2 className="room-card__title">
                    {title}
                </h2>
                <ul className="room-card__facilities">
                    <li className="room-card__item">
                        {facilitiesArr.map(item => 
                            `${item[1]} ${item[0]}`
                        )}
                    </li>
                </ul>
                <p className="room-card__price">
                    {price} USD per night
                </p>
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