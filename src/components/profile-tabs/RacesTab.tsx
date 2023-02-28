"use client"

export default function RacesTab() {
    return <div className="mt-5">
        <h1 className="mb-4 text-gold text-2xl">On-Going</h1>
        <div className="rounded bg-shadow-grey1 p-5">
            <table>
                <thead>
                    <tr className="text-gold text-sm">
                        <th>Race</th>
                        {/* <th>Horse</th> */}
                        <th>Ranking</th>
                        {/* <th>Punts On You</th> */}
                        <th>Est. Earnings</th>
                    </tr>
                </thead>
                <tbody className="text-white text-base font-medium">
                    <tr>
                        <td className="text-gold">Seasonal Stables Championship</td>
                        <td></td>
                        <td>16th</td>
                        <td></td>
                        <td>$12</td>

                    </tr>
                    <tr>
                        <td className="text-gold">Seasonal Stables Championship</td>
                        <td></td>
                        <td>16th</td>
                        <td></td>
                        <td>$12</td>

                    </tr>
                    <tr>
                        <td className="text-gold">Seasonal Stables Championship</td>
                        <td></td>
                        <td>16th</td>
                        <td></td>
                        <td>$12</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
} 
