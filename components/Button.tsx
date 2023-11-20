import Image from "next/image";

type ButtonProps = {
  //type: "filled" | "outlined";
  title: string;
  icon?: string;
  variant: "yellow" | "blue" | "white";
  full?: boolean;
};

const Button = ({ title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flex items-center rounded-xl border-2 px-6 py-2 max-w-sm 
      ${
        variant == "yellow" &&
        "bg-gradient-to-r from-red-400 to-yellow-400 hover:from-yellow-400 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-1500"
      }
      ${
        variant == "blue" &&
        "bg-gradient-to-r from-green-400 to-yellow-400 hover:from-yellow-400 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
      }
      ${
        variant == "white" &&
        "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
      }
      ${full && "w-full"}
      `}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24}></Image>}
      <label className="cursor-pointer whitespace-nowrap font-bold text-md m-auto">
        {title}
      </label>
    </button>
  );
};

export default Button;
