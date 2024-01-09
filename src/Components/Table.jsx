

const Table = ({item, index}) => {
    console.log(item);
    return (
        <tr className="bg-white shadow text-black border">
            <td className="shadow text-black border text-center">{index}</td>
            <td className="shadow text-black border text-center">{item.amount}.00TK</td>
            <td className="shadow text-black border text-center">{item.pen_amount}.00TK</td>
            <td className="shadow text-black border text-center">{item.date}</td>
        </tr>
    );
};

export default Table;