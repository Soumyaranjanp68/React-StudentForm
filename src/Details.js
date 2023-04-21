import { useLocation } from "react-router-dom";
import "./Details.css";


export default function Details() {
    const location = useLocation();
    return (
        <div>
            {(location.state) ? (             
                <div className='box'>
                    <table>
                        <tr>
                            <th>Full name </th>
                            <td>{location.state.fullname}</td>
                        </tr>
                        <tr>
                            <th>Mobile number </th>
                            <td>{location.state.mobile}</td>
                        </tr>
                        <tr>
                            <th>Gender </th>
                            <td>{location.state.gender}</td>
                        </tr>
                        <tr>
                            <th>Address </th>
                            <td>{location.state.address}</td>
                        </tr>
                    </table>
                    </div>
            ) : <div>{"No Data Found"}</div>}
        </div>
    )

}