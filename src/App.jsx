import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Items from "./components/Items";
import Summary from "./components/Summary";
import { useRef } from "react";

function App() {
    const [items, setItems] = useState([]);
    const [edit, setEdit] = useState({});
    const isMounted = useRef(false);

    const handleSubmit = (data) => {
        if (edit.id) {
            setItems((prevItems) => {
                return [
                    ...prevItems.map((el) => {
                        if (el.id === data.id) {
                            return { ...el, ...data };
                        }
                        return el;
                    }),
                ];
            });
            setEdit({});
        } else {
            setItems((prevItems) => [...prevItems, data]);
        }
    };

    const handleEdit = (id) => {
        const data = items.find((el) => el.id === id);
        setEdit(data);
    };

    const handleDelete = (id) => {
        setItems([...items.filter((el) => el.id !== id)]);
    };

    // useEffect(() => {
    //     localStorage.getItem("reviews")
    //         ? setItems(JSON.parse(localStorage.getItem("reviews")))
    //         : localStorage.setItem("reviews", "[]");
    // }, []);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            localStorage.getItem("reviews")
                ? setItems(JSON.parse(localStorage.getItem("reviews")))
                : localStorage.setItem("reviews", "[]");
            return;
        }
        localStorage.setItem("reviews", JSON.stringify(items));
        console.log("goi lan 2");
    }, [items]);

    return (
        <div className="main-container">
            <header className="header">Feedback TA</header>
            <div className="content">
                <Form editForm={edit} submit={handleSubmit} />
                <Summary items={items} />
                <List>
                    <Items
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        items={items}
                    />
                </List>
            </div>
        </div>
    );
}

export default App;
