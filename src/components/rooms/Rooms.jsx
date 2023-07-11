import React from "react"
import { getData } from "../../hooks/getData"
import { RoomCard } from "./RoomCard.jsx"
import style from './Room.module.css'

export const Rooms = () => {
    const [rooms, setRooms] = React.useState([])

    React.useEffect(() => {
        getData()
            .then(data => setRooms(data))
            .catch(error => console.error(error));
    }, [])

    console.log(rooms)

    return (
        <section className={style.rooms}>
            {rooms.map(item => (<RoomCard item={item} key={item.title}/>))}
        </section>
    )
}