import React, { Fragment } from 'react'
import Container from '../extra/Container'
import MDAFilters from '../Business/MDAFilters'
import MDAPagination from '../Business/MDAPagination'
import MDATable from '../Business/MDATable'

export default function () {
    return (
        <Container>

            {/* <div className="flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-2">

                <div className="my-3 px-3 w-1/4 overflow-hidden sm:my-3 sm:px-3 sm:w-1/5 md:my-2 md:px-2 md:w-1/3 lg:w-1/3 xl:w-1/3">a
                <Card />
                </div>

                <div className="my-3 px-3 w-1/4 overflow-hidden sm:my-3 sm:px-3 sm:w-1/5 md:my-2 md:px-2 md:w-1/3 lg:w-1/3 xl:w-1/3">a
                <Card />
                </div>

                <div className="my-3 px-3 w-1/4 overflow-hidden sm:my-3 sm:px-3 sm:w-1/5 md:my-2 md:px-2 md:w-1/3 lg:w-1/3 xl:w-1/3">a
                <Card />
                </div>

                <div className="my-3 px-3 w-1/4 overflow-hidden sm:my-3 sm:px-3 sm:w-1/5 md:my-2 md:px-2 md:w-1/3 lg:w-1/3 xl:w-1/3">a
                <Card />
                </div>

            </div> */}



            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <MDAFilters />
                    <MDATable />
                    <MDAPagination />
                </div>
            </div>
        </Container>
    )
}