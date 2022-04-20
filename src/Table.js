export const Table = ({ data }) => {

    return (

        <table>
            <tbody>
                <tr>
                    <th>Description</th>
                    <th>id</th>
                </tr>

                {data.map((item) => (

                    <tr key={item.id}>
                        <td>{item.part_id}</td>
                        <td>{item.part_description}</td>
                    </tr>
                    
                ))}

            </tbody>

        </table>

    )

}