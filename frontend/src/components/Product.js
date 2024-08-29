import React from 'react';

// Product component accepts props for dynamic rendering
export default function Product({ image, label, price, condition, description }) {
    return (
        <div className="flex flex-col gap-2 w-full max-w-xs mx-auto">
            {/* Display the product image */}
            <div className="h-32 w-full">
                {/* If image is an array, render the first image */}
                <img src={image} alt={label} className="w-full h-full object-cover" />
            </div>

            {/* Display the product label */}
            <div className="mb-1">
                <h2 className="text-xl font-semibold">{label}</h2>
            </div>

            {/* Display the product price */}
            <div className="mb-1">
                <p className="text-lg font-medium">${price}</p>
            </div>

            {/* Display the product condition */}
            <div className="mb-1">
                <p className="text-sm text-gray-500">Condition: {condition}</p>
            </div>

            {/* Display the product description */}
            <div>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
}
