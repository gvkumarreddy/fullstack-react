import React from "react";

const Footer = ({title}) => {
    return (
        <footer className="bg-white border-t py-6">
            <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} {title}
            </div>
        </footer>
    );
};

export default Footer;