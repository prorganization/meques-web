import Link from "next/link";

export default function ButtonBuyMembership() {

    return <Link href="/" className="text-sm bg-gold text-black px-14 py-[6.5px] rounded">Buy at <del>$5.99</del> <span className="text-red-600	">$1.99</span></Link>

}