import { PhotoIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const mockData = [
  {
    id: "1",
    email: "email@mail.ru",
    name: "name",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    role: "admin",
    lastSeen: false,
    lastSeenDateTime: "",
  },
];

const AdminDashboardPage = () => {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {mockData.map((client) => (
          <Link key={client.email} href={`/admin/dashboard/${client.id}`}>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <Image
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  width={100}
                  height={100}
                  src={client.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {client.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {client.email}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{client.role}</p>
                {client.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen{" "}
                    <time dateTime={client.lastSeenDateTime}>
                      {client.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboardPage;
