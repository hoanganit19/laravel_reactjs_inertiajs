import { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";

export default function Edit({ user }) {
    const [form, setForm] = useState({});
    const { errors } = usePage().props;
    const handleSubmit = (e) => {
        e.preventDefault();
        router.put("/users/" + user.id + "/edit", form);
    };
    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setForm({ ...user });
    }, []);

    return (
        <>
            <h2>Update User</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name..."
                        value={form.name ?? ""}
                        onChange={handleChangeValue}
                    />
                    {errors?.name && (
                        <span className="text-danger">{errors.name}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email..."
                        value={form.email ?? ""}
                        onChange={handleChangeValue}
                    />
                    {errors?.email && (
                        <span className="text-danger">{errors.email}</span>
                    )}
                </div>

                <button className="btn btn-primary">Save</button>
            </form>
        </>
    );
}
