import { useEffect, useState } from "react"
import { StyledAppLayout } from "../../StyledComponnets/Styles"
import SideBar from "./SideBar"
import Map from "./Map"

const AppLayout = () => {

    return (
        <StyledAppLayout >
            <SideBar />
            <Map />
        </StyledAppLayout>
    )
}
export default AppLayout