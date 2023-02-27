import Link from "next/link";
import editIco from "../../public/icons/edit.svg"
import Image from "next/image";

export default function ButtonEdit() {

    return <Link className="flex text-gold font-semibold text-sm" href="/">
        <Image src={editIco} alt="edit icon" className="mr-1.5" /> Edit
    </Link>


}