import { FiX } from "react-icons/fi";

const ViewContact = ({ contact, handleClose }: any) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#00000096]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[700px] bg-white p-16 relative rounded-md">
          <button className="text-xl absolute top-5 right-5" onClick={handleClose}>
            <FiX />
          </button>
          <h1 className="text-[26px] text-gray-900 font-medium mb-5">
            Contact
          </h1>
          <div className="space-y-2">
            <div className="grid grid-cols-2 items-center">
              <p className="text-[16px] text-gray-300 font-medium">Name</p>
              <p className="text-[14px] text-gray-200 font-normal capitalize">{contact?.firstName + " " + contact?.lastName}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p className="text-[16px] text-gray-300 font-medium">Email</p>
              <p className="text-[14px] text-gray-200 font-normal">{contact?.email}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p className="text-[16px] text-gray-300 font-medium">Phone</p>
              <p className="text-[14px] text-gray-200 font-normal">{contact?.phone}</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p className="text-[16px] text-gray-300 font-medium">Company Name</p>
              <p className="text-[14px] text-gray-200 font-normal">{contact?.companyName}</p>
            </div>
            <div>
              <p className="text-[16px] text-gray-300 font-medium">Description</p>
              <p className="text-[14px] text-gray-200 font-normal mt-2">{contact?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewContact;
