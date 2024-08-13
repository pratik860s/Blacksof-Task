import React from 'react';

interface ProductTabProps {
  name: string;
  isActive: boolean;
}

const ProductTab: React.FC<ProductTabProps> = ({ name, isActive }) => {
  const baseClasses = "gap-2.5 self-stretch p-2.5 text-xs flex items-start my-auto rounded-sm min-w-fit";
  const activeClasses = "text-sky-900 font-[300] border-2 border-blue-300";
  const inactiveClasses = "border-2 border-solid border-neutral-500";

  return (
    <div className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {name}
    </div>
  );
};

export default ProductTab;