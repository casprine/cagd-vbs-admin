import React, { useEffect, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Spinner } from 'evergreen-ui';
import { getMDAS as GET_MDAS } from '../../graphql/queries';

const ManageMDAs = props => {
  useEffect(() => {
    document.title = 'Manage MDAS | CADG';
  });

  const { loading: loadMDAS, data } = useQuery(GET_MDAS);

  return (
    <>
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 mb-3">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Manage MDAs</h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
              >
                Add MDA
              </button>
            </span>
          </div>
        </div>
      </div>

      {loadMDAS && (
        <div style={{ height: '50vh' }} className={'flex items-center justify-center'}>
          Loading ...
        </div>
      )}

      {data && data.MDAs.length > 0 && (
        <Fragment>
          <div className="flex flex-col">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Prefix
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data.MDAs.map((mda, i) => (
                      <Fragment key={i}>
                        <tr className={`${i%2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                  {/*{mda.name*/}
                                  {/*  ? mda.name.split('').length > 30*/}
                                  {/*    ? `${mda.name.slice(0, 30)}...`*/}
                                  {/*    : mda.name*/}
                                  {/*  : 'N/A'}*/}
                                  {mda.name ? mda.name : mda.name}
                                </div>
                                <div className="text-sm leading-5 text-gray-500">{mda.email ? mda.email : 'N/A'}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">{mda.phone ? mda.phone : 'N/A'}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {mda.prefix ? mda.prefix : 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {mda.address ? mda.address : 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {mda.status ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {mda.status}
                              </span>
                            ) : (
                              'N/A'
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-left border-b border-gray-200 text-sm leading-5 font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                            >
                              Activate
                            </a>
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default ManageMDAs;
