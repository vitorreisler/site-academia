import { CgGym } from "react-icons/cg";

const HrElement = () => {
    return ( 
        <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-yellow-300" />
        <div className="absolute px-4  bg-white  ">
          <CgGym className="scale-150" />
        </div>
      </div>
     );
}
 
export default HrElement;