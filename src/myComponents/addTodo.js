import React, { useState } from 'react';

export default function AddTodo ({addTodo}){
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !subject) {
            alert("Title or Subject cannot be empty");
            return;
        }
        addTodo(title, subject);
        // Logic to handle the form submission
        console.log("Todo submitted:", { title, subject });
        setTitle(""); // Clear the form
        setSubject("");
    }

    return (
        <div className='container my-3'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" id="subject" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    );
}

