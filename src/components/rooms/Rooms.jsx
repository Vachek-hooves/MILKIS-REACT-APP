import React from "react"
import { getData } from "../../hooks/getData"
import { RoomCard } from "./RoomCard.jsx"
import style from './Room.module.css'
import { Banner } from "../banner/Banner"

export const Rooms = () => {
    const [rooms, setRooms] = React.useState([])
    const url = `${process.env.PUBLIC_URL}/data/rooms.json`

    React.useEffect(() => {
        getData(url)
            .then(data => setRooms(data))
            .catch(error => console.error(error));
    }, [])

    return ( 
        <section className={style.rooms}>
            <Banner section="rooms" />
            <div className={style.rooms__cardWrapper}>
                {rooms.map(item => (<RoomCard item={item} key={item.title}/>))}
            </div>
        </section>
    )
}