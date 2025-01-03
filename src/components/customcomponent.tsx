import { PortableTextComponents } from "@portabletext/react";
export  const Components: PortableTextComponents = {
    block:{
        h2: ({ children }) => <h2 className="text-4xl font-bold underline text-pink-500 text-center my-8 text-outline">{children}</h2>,
        h3: ({ children }) => <h3 className="text-3xl text-blue-400 text-outline">{children}</h3>,
        h4: ({ children }) => <h4 className="text-3xl text-purple-500 text-outline">{children}</h4>,
        h6: ({ children }) => <h6 className="text-3xl text-gray-200 text-outline">{children}</h6>,
       
    },
    listItem: ({ children }) => <li className=" text-amber-500 text-outline list-disc">{children}</li>,
    
}