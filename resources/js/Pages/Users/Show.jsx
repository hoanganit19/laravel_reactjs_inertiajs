import { Link, router } from "@inertiajs/react";
import clsx from "clsx";

export default function Show({ users }) {
    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn?")) {
            router.delete(`/users/${id}/delete`);
        }
    };
    return (
        <>
            <h2>User List</h2>
            <Link className="btn btn-primary mb-3" href="/users/create">
                Add New User
            </Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th width="5%">#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th width="5%">Edit</th>
                        <th width="5%">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link
                                    className="btn btn-warning btn-sm"
                                    href={`/users/${user.id}/edit`}
                                >
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    {users.links.map((link, index) => {
                        let label = link.label;
                        if (index === 0) {
                            label = "Previous";
                        }
                        if (index === users.links.length - 1) {
                            label = "Next";
                        }
                        return (
                            <li
                                className={clsx(
                                    "page-item",
                                    link.active && "active",
                                    !link.url && "disabled"
                                )}
                                key={label}
                            >
                                <Link className="page-link" href={link.url}>
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
