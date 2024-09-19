import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Table = styled.table`
    background-color: #f5f5f5;
    width: 100%;
    border-collapse: collapse;
`;

const Thead = styled.thead`
    background-color: #007bff;
    color: #fff;
`;

const Tr = styled.tr`
    background-color: ${props => props.index % 2 === 0 ? '#e9ecef' : '#fff'};
`;

export default function Home() {
    const [placements, setPlacements] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log("hi");
        loadPlacements();
    }, []);

    const loadPlacements = async () => {
        const result = await axios.get("http://localhost:8080/Allplacement");
        setPlacements(result.data);
    };

    const deletePlacement = async (id) => {
        await axios.delete(`http://localhost:8080/placement/${id}`);
        loadPlacements();
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <Table className="table border shadow">
                    <Thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">CompanyName</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Placement Date</th>
                            <th scope="col">Student ID</th>
                            <th scope="col">Action</th>
                        </tr>
                    </Thead>
                    <tbody>
                        {placements.map((placement, index) => (
                            <Tr key={index} index={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{placement.companyname}</td>
                                <td>{placement.jobtitle}</td>
                                <td>{placement.placementdate}</td>
                                <td>{placement.studentid}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2' to="#">View</Link>
                                    <Link className='btn btn-outline-primary mx-2' to={`/editplacement/${placement.id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => deletePlacement(placement.id)}>Delete</button>
                                </td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
