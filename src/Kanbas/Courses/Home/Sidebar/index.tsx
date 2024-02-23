function Sidebar () {
    return (
        <div className="d-none d-lg-block m-2 w-25">
            <button type="button" className="btn btn-light w-100 text-start">Import Existing Content</button>
            <button type="button" className="btn btn-light w-100 text-start">Import from Commons</button>
            <button type="button" className="btn btn-light w-100 text-start">Choose Home Page</button>
            <button type="button" className="btn btn-light w-100 text-start">View Course Stream</button>
            <button type="button" className="btn btn-light w-100 text-start">New Announcement</button>
            <button type="button" className="btn btn-light w-100 text-start">New Analytics</button>
            <button type="button" className="btn btn-light w-100 text-start">View Course Notifications</button>
            <br/><br/><b>To-Do</b><hr/>
            <ul>
                <li><a href="#">Lecture CS4550 Sep 7 at 11:45am</a></li>
                <li><a href="#">Lecture CS4550 Sep 11 at 11:45am</a></li>
                <li><a href="#">Lecture CS5610 Sep 11 at 6:00pm</a></li>
            </ul>
        </div>
    )
}

export default Sidebar