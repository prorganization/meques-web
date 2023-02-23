import Link from "next/link";

export default function Footer() {

    return <div className="flex gap-3 my-5 text-white text-sm font-medium">
        <p className="opacity-30">Learn</p>
        <Link href="/" >Getting Started</Link>
        <Link href="/" >FAQ</Link>
        <Link href="/" >Whitepaper</Link>
        <Link href="/" >Roadmap</Link>
        <Link href="/" >News</Link>
        <Link href="/" >Why NFT?</Link>

        <p className="opacity-30 ml-10">Legal</p>
        <Link href="/" >T&C</Link>
        <Link href="/" >FAQ</Link>
        <Link href="/" >Risk Declaimer</Link>
        <Link href="/" >Privacy Policy</Link>
    </div>

}