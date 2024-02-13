"use client";

// import statements
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const handleChange = (e) => {
    console.log(e.target);
    const value = e.target.value;
    const name = e.target.name;
    console.log(value + " " + name + " " + e.target.required + " " + e.target.randomstuff);
  }

  const handleSubmit = () => {
    
  }

  const [formData, setFromData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
        <h3>Create Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
      </form>
    </div>
  );
};

export default TicketForm;
