import React from "react"
import { getData } from "../../hooks/getData"
import { RoomCard } from "./RoomCard.jsx"

export const Rooms = () => {
    const [rooms, setRooms] = React.useState([])

    React.useEffect(() => {
        getData()
            .then(data => setRooms(data))
            .catch(error => console.error(error));
    }, [])

    console.log(rooms)

    return (
        <div>
            {rooms.map(item => (<RoomCard item={item} key={item.title}/>))}
            Hello
        </div>
    )
}