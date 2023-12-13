"use client";
import React, { useState } from "react";
import Userlayout from "../../layouts/userdashboard";
import Image from "next/image";
import sliderImage from "../../../assests/images/user/en_dk_uae-hero-02.gif";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { RxCross1 } from "react-icons/rx";
import dummyId from "../../../assests/images/user/homat_id_placeholder.png";
import Link from "next/link";
const Profile = () => {
  const [Phone, SetPhone] = useState();
  const [password, SetPassword] = useState(false);
  const [addNumbar, SetAddNumbar] = useState(false);
  const [deleteAccount, SetdeleteAccount] = useState(false);
  const [LinkAccount, SetLinkAccount] = useState(false);

  const [previewImage1, setPreviewImage1] = useState("");

  const handleFileChange1 = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.includes("image")) {
    //   setSelectedFile1(file);

      const reader: any = new FileReader();
      reader.onload = () => {
        setPreviewImage1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Userlayout>
        {password && (
          <div className="w-full fixed top-0 left-0 h-[100vh] z-50 bg-[#0000006e] flex justify-center items-center">
            <div className="w-[350px] bg-white rounded-lg">
              <div className="py-4 px-5 border-b flex justify-between items-center">
                <h1 className="text-ubuntu-bold text-HeadingColours">
                  Change password
                </h1>
                <RxCross1
                  onClick={() => {
                    SetPassword(false);
                  }}
                  className="cursor-pointer"
                />
              </div>
              <div className="p-5">
                <div className="mt-5">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                  >
                    Current password
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                  >
                    New password
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                  >
                    Repeat new password
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  className="text-P_textColour w-full text-ubuntu-bold bg-[#F0F1F4] border-none outline-none uppercase text-sm p-3 px-5 rounded mt-5 opacity-70"
                  disabled
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}

        {addNumbar && (
          <div className="w-full fixed top-0 left-0 h-[100vh] z-50 bg-[#0000006e] flex justify-center items-center">
            <div className="w-[350px] bg-white rounded-lg">
              <div className="py-4 px-5 border-b flex justify-between items-center">
                <h1 className="text-ubuntu-bold text-HeadingColours">
                  Add phone number
                </h1>
                <RxCross1
                  onClick={() => {
                    SetAddNumbar(false);
                  }}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-ubuntu-regular text-P_textColour text-center mt-3">
                Please enter the new phone number
              </p>
              <div className="p-5">
                <div className="my-3">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                  >
                    New phone number
                  </label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    className="PhoneInputInput outline-none border-0 focus:ring-0 text-P_textColour text-sm"
                    value={Phone}
                    onChange={(value: any) => SetPhone(value)}
                    error={
                      Phone
                        ? isValidPhoneNumber(Phone)
                          ? undefined
                          : "Invalid phone number"
                        : "Phone number required"
                    }
                  />
                </div>
                <button className="text-white w-full text-ubuntu-bold bg-[#3866DF] border-none outline-none uppercase text-sm p-3 px-5 rounded mt-5">
                  ADD PHONE NUMBER
                </button>
              </div>
            </div>
          </div>
        )}

        {deleteAccount && (
          <div className="w-full fixed top-0 left-0 h-[100vh] z-50 bg-[#0000006e] flex justify-center items-center">
            <div className="w-[600px] max-h-[70vh] overflow-auto bg-white rounded-lg">
              <div className="py-4 px-5 border-b flex justify-between items-center">
                <h1 className="text-ubuntu-bold text-HeadingColours">
                  Delete account
                </h1>
                <RxCross1
                  onClick={() => {
                    SetdeleteAccount(false);
                  }}
                  className="cursor-pointer"
                />
              </div>
              <div className="p-5">
                <div className="">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                  >
                    Preferred language
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option value="" selected></option>
                    <option>I have another account</option>
                    <option value="CA">I want to create a new account</option>
                    <option value="CA">
                      I do not use this account anymore
                    </option>
                    <option value="CA">
                      I get too many forgot password emails
                    </option>
                    <option value="CA">Security Concerns</option>
                    <option value="CA">Privacy Concerns</option>
                    <option value="CA">None of the above</option>
                  </select>
                </div>
                <h1 className="text-ubuntu-bold text-HeadingColours mt-8">
                  Please read the terms and conditions carefully
                </h1>
                <p className="text-ubuntu-light text-black text-sm mt-2">
                  The terms and conditions set out herein are applicable to
                  noon, noon Grocery, noon Food and noon pay. Upon checking the
                  box “I have read the terms and conditions” and clicking the
                  button “Delete Your Account”, you hereby affirm your
                  understanding and acceptance of the following:
                </p>
                <ol className="list-decimal ml-5 text-ubuntu-light text-black text-sm mt-3">
                  <li className="mt-2">
                    You will no longer receive any transactional or promotional
                    communication from noon and its associated websites and
                    mobile applications.
                  </li>
                  <li className="mt-2">
                    You will not be able to register or sign in with the same
                    email address used for the account to be deleted and you
                    will lose access to all information related to such account,
                    including but not limited to, orders, returns, warranty,
                    bank transfer, account balance and noon credits.
                  </li>
                  <li className="mt-2">
                    You must first cancel your noon Grocery subscriptions and
                    auto-deliveries before deleting your account to avoid any
                    further issues with delivery and future charges with noon
                    Grocery.
                  </li>
                  <li className="mt-2">
                    We will retain the necessary data required to complete any
                    pending orders, returns, warranty claims or bank transfer in
                    your account, to the extent which enables us to process such
                    pending transactions up to its completion.
                  </li>
                  <li className="mt-2">
                    You will lose access to any pending noon Credits. In the
                    event that you wish to recover and use such credits, please
                    contact customer support at noon.com.
                  </li>
                  <li className="mt-2">
                    Existing EMI plans prior to the deletion of the account
                    shall remain valid and applicable.
                  </li>
                  <li className="mt-2">
                    You will lose all associated noon VIP benefits.
                  </li>
                  <li className="mt-2">
                    Any co-branded noon credit or debit cards will remain valid.
                  </li>
                  <li className="mt-2">
                    For UAE consumers with co-branded noon credit or debit cards
                    or non-zero balance in your noon pay account, you can access
                    this amount if you link your noon pay account before account
                    deletion. We suggest this option in order to retain all your
                    noon pay related benefits. Please contact noon pay customer
                    service to receive instructions on how to delete your noon
                    pay account.
                  </li>
                  <li className="mt-2">
                    For KSA or Egypt consumers with co-branded noon credit or
                    debit cards or non-zero balance in your noon pay account,
                    your balance can be retrieved upon contacting noon pay
                    customer service.
                  </li>
                  <li className="mt-2">
                    You will still earn rewards cashback for purchases made this
                    month on noon Grocery. However, you shall lose access to
                    such cashback upon deletion of your account, unless you
                    request to recover the amount by contacting noon customer
                    support.
                  </li>
                  <li className="mt-2">
                    You agree that we may retain your data to the extent
                    necessary for us to store any remaining credits and benefits
                    in your account for your use, should you decide to recover
                    and use such amount and/or benefits. You can do this by
                    contacting customer support at noon.com. Noon credits or
                    cashback can only be recovered and redeemed within twelve
                    (12) months from the date the credits were added to your
                    account.
                  </li>
                  <li className="mt-2">
                    To claim a warranty on purchased items, please contact
                    customer support at noon.com.
                  </li>
                  <li className="mt-2">
                    You agree that we may retain some of your data for
                    compliance reasons, as may be required by the applicable
                    laws and regulations as well as government or regulatory
                    bodies, and for other purposes such as fraud prevention,
                    audit, accounting and taxation.
                  </li>
                  <li className="mt-2">
                    You agree that these terms and conditions are subject to our{" "}
                    <Link className="text-blue-600 underline" href={"#"}>
                      privacy policy
                    </Link>
                  </li>
                  <li className="mt-2">
                    For any other queries or clarifications, please reach out to
                    customer support at noon.com.
                  </li>
                </ol>
                <h1 className="text-ubuntu-bold text-HeadingColours mt-8">
                  These changes may take 3-5 minutes to reflect on all devices
                </h1>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I have read the terms and conditions
                  </label>
                </div>
                <button
                  className="text-P_textColour w-full text-ubuntu-bold bg-[#F0F1F4] border-none outline-none uppercase text-sm p-3 px-5 rounded mt-5 opacity-70"
                  disabled
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}

        {LinkAccount && (
          <div className="w-full fixed top-0 left-0 h-[100vh] z-50 bg-[#0000006e] flex justify-center items-center">
            <div className="w-[350px] bg-white rounded-lg">
              <div className="py-4 px-5 border-b flex justify-between items-center">
                <h1 className="text-ubuntu-bold text-HeadingColours">
                  Homat Al Watan
                </h1>
                <RxCross1
                  onClick={() => {
                    SetLinkAccount(false);
                  }}
                  className="cursor-pointer"
                />
              </div>
              <div className="p-5">
                <div className="mt-5">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                  >
                    Card number
                  </label>
                  <input
                    type="number"
                    id="first_name"
                    className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                  >
                    Card expiry date
                  </label>
                  <input
                    type="date"
                    className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                  >
                    Front copy of card
                  </label>
                  <div className="grid grid-cols-2">
                    <div>
                     
                      {previewImage1 ? (
                            <Image
                                width={100}
                                height={100}
                                src={previewImage1}
                                alt="previewimg1.png"
                            />
                        ) : ( <Image src={dummyId} alt="" />)}
                    </div>
                    <div>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full  border-2 border-blue-500 rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                        >
                          <div className="flex flex-col items-center justify-center py-3">
                            <p className="text-xs text-blue-500 dark:text-gray-400">
                              CHOOSE FILE
                            </p>
                          </div>
                          <input
                onChange={handleFileChange1}
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="text-P_textColour w-full text-ubuntu-bold bg-[#F0F1F4] border-none outline-none uppercase text-sm p-3 px-5 rounded mt-5 opacity-70"
                  disabled
                >
                  LINK YOUR ACCOUNT
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-[#F3F4F8] px-10">
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours">
            Profile
          </h1>
          <p className="text-md my-2 text-P_textColour text-ubuntu-regular">
            Manage your details, view your tier status and change your password
          </p>

          <div className="mb-5">
            <Image className="w-full mt-5" src={sliderImage} alt="" />
          </div>

          <div className="mb-7 bg-white pb-5">
            <div className="p-5 bg-[#E8FFEB] text-ubuntu-regular text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore et quae consequatur.
            </div>
          </div>

          <div className="mb-7 bg-white p-10">
            <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
              General Info
            </h1>

            <div className="grid mt-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  placeholder="text..."
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  placeholder="text..."
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                >
                  Preferred language
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option selected>English</option>
                  <option value="CA">العربية</option>
                </select>
              </div>
            </div>
            <button
              className="text-P_textColour text-ubuntu-bold bg-[#F0F1F4] border-none outline-none uppercase text-sm p-3 px-5 rounded mt-5 opacity-70"
              disabled
            >
              Update Info
            </button>
          </div>

          <div className="mb-7 bg-white p-10">
            <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
              Security
            </h1>

            <div className="grid mt-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="first_name"
                  className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  placeholder="text..."
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="first_name"
                  className="bg-gray-50 rounded-sm border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  placeholder="text..."
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours"
                >
                  Phone number
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  className="PhoneInputInput outline-none border-0 focus:ring-0 text-P_textColour text-sm"
                  value={Phone}
                  onChange={(value: any) => SetPhone(value)}
                  error={
                    Phone
                      ? isValidPhoneNumber(Phone)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"
                  }
                />
                <p className="text-xs mt-2 text-P_textColour">
                  This phone number is your primary phone number and is unique
                  across noon
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                SetPassword(true);
              }}
              className="text-HeadingColours mr-5 text-ubuntu-bold bg-transparent hover:text-P_textColour  border outline-none uppercase text-sm p-3 px-5 rounded mt-5 opacity-70"
            >
              CHANGE PASSWORD
            </button>
            <button
              onClick={() => {
                SetAddNumbar(true);
              }}
              className="text-HeadingColours mr-5 text-ubuntu-bold bg-transparent hover:text-P_textColour  border outline-none uppercase text-sm p-3 px-5 rounded mt-5 opacity-70"
            >
              ADD PHONE NUMBER
            </button>
            <p
              onClick={() => {
                SetdeleteAccount(true);
              }}
              className="inline-block cursor-pointer text-red-500 text-ubuntu-regular text-md underline hover:normal-case"
            >
              Delete account
            </p>
          </div>

          <div className="mb-7 bg-white p-10">
            <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
              Link your account
            </h1>

            <div className="grid mt-5  sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="">
                <p className="block mb-2 text-sm font-medium dark:text-white text-ubuntu-bold text-HeadingColours">
                  Homat Al Watan
                </p>
                <p className="block mb-2 text-sm dark:text-white text-ubuntu-light text-P_textColour">
                  Link your card with this noon account for exclusives offers
                  and benefits
                </p>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    SetLinkAccount(true);
                  }}
                  className="text-HeadingColours mr-5 text-ubuntu-bold bg-transparent hover:text-P_textColour  border outline-none uppercase text-sm p-3 px-5 rounded mt-5 opacity-70"
                >
                  Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </Userlayout>
    </>
  );
};

export default Profile;
