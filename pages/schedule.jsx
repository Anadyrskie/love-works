import Image from "next/image";
import schedule from "../public/loveWorksSchedule.jpg"
export default function Schedule() {
    return (
        <div className={`w-full`}>
        <Image src={schedule} alt={'Love Works festival Schedule'} className={`w-full`} />
        </div>

    )
}