import BodyLeftMeeting from "./BodyLeftMeeting";
import BodyRightMeeting from "./BodyRightMeeting";

function Meeting() {
    return (
        <div className="flex">
            <BodyLeftMeeting/>
            <BodyRightMeeting/>
        </div>
    )
}

export default Meeting;