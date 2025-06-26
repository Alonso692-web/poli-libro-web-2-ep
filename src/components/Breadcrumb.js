// src/components/Breadcrumb.js
const Breadcrumb = ({ items }) => {
    return (
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && <span className="mx-2">›</span>}
                        <a href={item.href} className="hover:underline">{item.name}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;