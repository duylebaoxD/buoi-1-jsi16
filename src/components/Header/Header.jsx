import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';

export default function Header() {
    return(
        <div className="header">
            <div className="headerContainer">
                <div className="subSiteList">
                    <div className="subSite">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="subSite">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="subSite">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="subSite">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="subSite">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>

                <h1 className="headerTitle">A lifetime of discounts? It's Genious.</h1>
                <p className="headerSubtext">Get rewarded for your travels - unlock instant savings of 10% 
                or more with a free Lamabooking account</p>
                <button className="headerBtn">Sign in / Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="searchIcon" />
                        <input type="text" placeholder="Where are you going?" className="searchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
                        <input type="text" placeholder="10/02/2022 to 10/02/2022" className="searchText" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="searchIcon" />
                        <input type="text" placeholder="1 adult/child - 1 room" className="searchText" />
                    </div>
                    <button className="headerBtn">Search</button>
                </div>
            </div>
        </div>
    )
}