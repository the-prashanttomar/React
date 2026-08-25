import { useRouteError } from "react-router"
const Error =()=>{
    const errorData = useRouteError();
    return (
        <div>

        <h1>oOoOoOppppssss!!!</h1>
        <h3>{errorData.status} {errorData.statusText}</h3>
        </div>
    )
}
export default Error