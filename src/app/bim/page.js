import Form from "@/components/forms"
import React from "react"
import GlobalState from "../global-state/page"
import Async from "../global-state/components/async"
import DataFetch from "../global-state/components/datafetch"
const BIM =()=>{
    return (
        <div>
            <DataFetch/>
            <Async/>
            <Form/>
            <GlobalState/>
            
        </div>
    )
}
export default BIM;




