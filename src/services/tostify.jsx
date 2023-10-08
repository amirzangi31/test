import toast from "react-hot-toast";

const toastify = (type , text) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        }  ${type === "error" ? "bg-error-main" : "bg-secondary-main"} shadow-[box-shadow: 0px 0px 16px 0px #0000001A
      ] rounded-[10px]  px-2 py-1 text-white-main `}
      >
        <div className="text-[14px]">{text}</div>
      </div>
    ),
    { duration: 500 }
  );
};

export { toastify };
