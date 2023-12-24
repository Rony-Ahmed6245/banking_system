

const Table = ({item}) => {
    console.log(item);
    return (
        <tr>
            <td>{item.amount}.00TK</td>
            <td>{item.pen_amount}.00TK</td>
            <td></td>
        </tr>
    );
};

export default Table;