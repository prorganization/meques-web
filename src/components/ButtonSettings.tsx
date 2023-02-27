import Link from "next/link";
import settingIco from "../../public/icons/setting.svg"
import Image from "next/image";

export default function ButtonSetting() {

    return <Link className="flex text-gold font-semibold text-sm" href="/">
        <Image src={settingIco} alt="setting icon" className="mr-1.5" />Setting
    </Link>


}