import React, { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Save data to local storage whenever `data` changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    setData(storedData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && gender) {
      if (editIndex !== null) {
        const updatedData = data.map((item, i) =>
          i === editIndex ? { name, age, gender } : item
        );
        setData(updatedData);
        setEditIndex(null);
      } else {
        setData([...data, { name, age, gender }]);
      }

      setName("");
      setAge("");
      setGender("");
    }
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    setEditIndex(null);
    setName("");
    setAge("");
    setGender("");
  };

  const handleEdit = (index) => {
    const editItem = data[index];
    setEditIndex(index);
    setName(editItem.name);
    setAge(editItem.age);
    setGender(editItem.gender);
  };

  return (
    <div className="border-black p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          onChange={(e) => setName(e.target.value)}
          className="border border-black p-2 rounded-md"
          value={name}
          type="text"
          placeholder="name"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-black p-2 rounded-md"
          type="number"
          placeholder="age"
        />
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border border-black p-2 rounded-md"
          type="text"
          placeholder="gender"
        />
        <button
          className="border self-start bg-black text-white border-black p-1 rounded-md"
          type="submit"
        >
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </form>
      {/* data table */}
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-around border border-black">
          <div className="px-10 border-r border-black">
            <p>Name</p>
          </div>
          <div className="border-r border-black px-4">Age</div>
          <div className="border-r border-black px-4">Gender</div>
          <div className="px-4">Action</div>
        </div>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="flex justify-around">
              <div className="px-4">
                <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
              </div>
              <div className="border border-black px-4">{item.age}</div>
              <div className="border border-black px-4">{item.gender}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(index)}
                  className="border border-black px-3"
                >
                  Del
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  className="border border-black px-3"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-4">No data available</div>
        )}
      </div>
    </div>
  );
};

export default Home;
