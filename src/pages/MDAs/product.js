import React, { useEffect, Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { productForMDA as PRODUCT_MDA } from '../../graphql/queries';

const MDAProduct = props => {
  const { location } = useHistory();
  const { id } = useParams();

  const { loading, data } = useQuery(PRODUCT_MDA, {
    variables: {
      id,
    },
  });
  useEffect(() => {
    document.title = `Products | CADG`;
    console.log(id);
  });
  return (
    <>
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 mb-3">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{location.state.name}</h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
              >
                Add Product
              </button>
            </span>
          </div>
        </div>
      </div>

      {loading && (
        <div style={{ height: '50vh' }} className={'flex items-center justify-center'}>
          Loading ...
        </div>
      )}

      {data && data.products.length > 0 && (
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
                        Short Code
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Unit Price
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Bundle Size
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Minimum Order Count
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data.products.map((product, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">{product.name ? product.name : 'N/A'}</div>
                              <div className="text-sm leading-5 text-gray-500">{product.type ? product.type : 'N/A'}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {product.shortCode ? product.shortCode : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {product.unitPrice ? product.unitPrice : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {product.bundleSize ? product.bundleSize : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {product.minOrderCount ? product.minOrderCount : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Fragment>
      )}

      {
        data && data.products.length === 0 && (
          <div tyle={{ height: '50vh' }} className={'flex items-center justify-center'}>
            No Data here
          </div>
        )
      }
    </>
  );
};

export default MDAProduct;
