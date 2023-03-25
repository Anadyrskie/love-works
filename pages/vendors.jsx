import tsv from '../lib/tsvParse';
import React from "react";
import {useTable} from "react-table";
export default function Vendors({data}) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Booth #',
                accessor: 'number', // accessor is the "key" in the data
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Demo',
                accessor: 'demo',
            }
        ],
        []
    )
    const tableInstance = useTable({ columns, data })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return (
        <>
        <div style={{width: "max-content"}} className={`my-10 shadow-md dark:shadow-lg m-auto`}>
            <table className={`border-collapse border border-slate-400 dark:border-gray-400 dark:text rounded`} {...getTableProps()}>
                <thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr key={Object.values(headerGroup).join(' ')}  {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(column => (
                                    // Apply the header cell props
                                    <th key={column.value} className={`border border-slate-300 dark:border-gray-600 dark:text-white p-1`} {...column.getHeaderProps()}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr key={Object.values(row).join(' ')} {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <td key={cell.value} className={`border border-slate-300 dark:border-gray-600 dark:text-white p-1`} {...cell.getCellProps()}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )


}

export async function getServerSideProps() {
    let data = tsv.parseFile('./public/data/vendors.tsv')
    let pared = data.map((vendor) => {
        return {
            number: vendor['Booth #'] || 'TBD',
            name: vendor['Business name'] || vendor['Name'],
            description: vendor['Type of product'] ?? '',
            demo: vendor['Demo'] ?? ''
        }
    })
    return {
        props: {
            data: pared
        }
    }
}