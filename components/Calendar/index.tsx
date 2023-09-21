import BodyLeftView from "./BodyLeftView";
import BodyRightView from "./BodyRightView";

function Calendar() {
    return (
        <div className="flex w-[100%]">
            <BodyLeftView/>
            <BodyRightView/>
        </div>
    )
}

export default Calendar;