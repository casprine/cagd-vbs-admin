import React from 'react'



export default ({ name, src, role, approvedAt, status }) => {
    const [statusState, setStatus] = React.useState(status)
    const [bg, setbg] = React.useState(statusState === "Active" ? "green" : statusState === "Suspended" ? "orange" : "red")
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                            src={src}
                            alt="avi" />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {name}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{role}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{approvedAt.format('MMM D, YYYY')}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm bg-white text-sm">
                <span
                    className={`relative inline-block px-3 py-1 font-semibold text-${bg}-900 leading-tight`}>
                    <span aria-hidden
                        className={`absolute inset-0 bg-${bg}-200 opacity-50 rounded-full`}></span>
                    <span className="relative">{status}</span>
                </span>
            </td>
        </tr>
    )
}