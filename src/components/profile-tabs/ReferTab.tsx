"use client"

export default function ReferTab() {
    return <div className="mt-5">
        <h1 className="mb-4 text-gold font-medium text-2xl">Support your referrer</h1>
        <div className="flex gap-x-7">
            <div className="w-4/12 bg-main-purple rounded flex-col font-medium text-white text-lg px-4 py-6">
                <p className="mb-4">Enter your referrer's code below to<br />support them</p>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full rounded bg-main-purple-lighter px-3 py-[5.5]"    
                        />
                    </div>
                    <button type="submit" className="text-sm bg-gold text-black px-10 py-[6.5px] rounded">Submit</button>
                </form>
            </div>
            <div className="w-8/12 rounded bg-support-player bg-no-repeat bg-right-bottom bg-cover p-5">
                <h1 className="text-gold-darker font-medium text-2xl">Support your referrer</h1>
                <p className="mb-4 text-lg">Enter your referrer's code below to<br />support them</p>

            </div>
        </div>
    </div>
} 
