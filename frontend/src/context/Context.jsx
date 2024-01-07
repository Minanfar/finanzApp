import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [listElement, setListElement] = useState({
    category: "",
    product: "",
    price: "",
  });

  const [budget, setBudget] = useState(1000);
  const [finances, setFinances] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
  const url = "https://finanz-tracker-backend.onrender.com";
  const [category, setCategory] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showForm, setShowForm] = useState(true);
  return (
    <Context.Provider
      value={{
        listElement,
        setListElement,
        finances,
        setFinances,
        budget,
        setBudget,
        name,
        setName,
        price,
        setPrice,
        editingId,
        setEditingId,
        url,
        category,
        setCategory,
        showCategory,
        setShowCategory,
        showChart,
        setShowChart,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
