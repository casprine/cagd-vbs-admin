import moment from 'moment'


export const tableData = {
    MDAs: [
        {
            name: "Ministry Of Fisheries",
            role: "Admin",
            approvedAt: moment(),
            status: "Active",
            src: "http://ghanaembassy.it/images/ghanacrest.png"
        },
        {
            name: "Ministry of Health",
            role: "Editor",
            approvedAt: moment(),
            status: "Active",
            src: "http://ghanaembassy.it/images/ghanacrest.png"
        },
        {
            name: "Ministry Of Foreign Affairs and Regional Integration",
            role: "Editor",
            approvedAt: moment(),
            status: "Suspended",
            src: "http://ghanaembassy.it/images/ghanacrest.png"
        },
        {
            src: "http://ghanaembassy.it/images/ghanacrest.png",
            name: "Birth And Death",
            approvedAt: moment(),
            status: "Inactive",
            role: "Admin"
        }
    ]
}

