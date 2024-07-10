import React, { useState, useEffect } from 'react'

function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="flex text-center px-4 py-8 justify-center">
            <p className="text-sm">
                Copyright {year} . Allrights reserved by LuxSpace
            </p>
        </footer>
    )
}

export default Footer