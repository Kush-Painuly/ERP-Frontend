import { useRef, useState } from "react";
import { convertToBase64 } from "../../utils/ImageHelpers";

const UploadProfile = ({ onGetImage }) => {
  const imagePicker = useRef();
  const [image, setImage] = useState("");

  const pickImageHandler = () => {
    imagePicker.current.click();
  };

  const pickedHandler = async (e) => {
    const selectedImage = e.target.files[0];
    const base64String = await convertToBase64(selectedImage);
    onGetImage(base64String);
    setImage(selectedImage);
  };

  const removeImage = () => {
    setImage("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-white text-xl font-bold uppercase py-3">
        Profile Info
      </h2>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="floating_first_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div>
        <input
          type="file"
          id="image"
          hidden
          onChange={pickedHandler}
          ref={imagePicker}
        />
      </div>
      <div className="flex items-center justify-between gap-4 py-3">
        <div className="image-container">
          {!image && (
            <div className="image-wrapper">
              <img
                src="http://via.placeholder.com/230x160"
                alt="Preview"
                className="image-preview"
              />
            </div>
          )}
          {image && (
            <div className="image-wrapper relative">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="image-preview"
              />
              <button className="absolute top-2 right-4 text-white font-bold" onClick={removeImage}>
                X
              </button>
            </div>
          )}
        </div>
        <div className="text-center py-4">
          <button
            className="text-white border border-white capitalize px-5"
            onClick={pickImageHandler}
          >
            upload image
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadProfile;
