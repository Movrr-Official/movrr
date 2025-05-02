"use client";

import React, { useState, useEffect, ReactNode } from "react";
import {
  AiFillCheckCircle,
  AiOutlineWarning,
  AiFillInfoCircle,
  AiFillCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { Toast, toast } from "react-hot-toast";
import { IconType } from "react-icons/lib";

interface CustomToastProps {
  title: string;
  message: string | ReactNode;
  Icon: IconType;
  iconColor: string;
  bgColor: string;
  notificationTime: Date;
  isConfirmation?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  t: Toast;
}

const CustomToast: React.FC<CustomToastProps> = ({
  title,
  message,
  Icon,
  iconColor,
  bgColor,
  notificationTime,
  isConfirmation = false,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  t,
}) => {
  const [elapsedTime, setElapsedTime] = useState("Just now");

  useEffect(() => {
    const updateElapsedTime = () => {
      const currentTime = new Date();
      const timeDifference = Math.floor(
        (currentTime.getTime() - notificationTime.getTime()) / 1000
      ); // Time difference in seconds

      if (timeDifference < 60) {
        setElapsedTime("Just now");
      } else if (timeDifference < 3600) {
        setElapsedTime(`${Math.floor(timeDifference / 60)} minutes ago`);
      } else if (timeDifference < 86400) {
        setElapsedTime(`${Math.floor(timeDifference / 3600)} hours ago`);
      } else {
        setElapsedTime(
          notificationTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      }
    };

    // Set initial elapsed time
    updateElapsedTime();

    // Update elapsed time every minute
    const interval = setInterval(updateElapsedTime, 60000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, [notificationTime]);

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    toast.dismiss(t.id);
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    toast.dismiss(t.id);
  };

  return (
    <div
      className={`max-w-full p-2 text-sm transition-opacity duration-150 ease-linear bg-white border-0 rounded-lg shadow-2xl pointer-events-auto w-[22rem] bg-clip-padding`}
      id="limeToast"
    >
      <div
        className={`flex items-center p-3 rounded-t-lg bg-clip-padding ${bgColor}`}
      >
        <Icon className={`mr-2 leading-none ${iconColor} text-xl`} />
        <span className="mr-auto font-semibold text-slate-800">{title}</span>
        {!isConfirmation && (
          <span className="text-slate-500">{elapsedTime}</span>
        )}
        {!isConfirmation && (
          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-4 cursor-pointer hover:text-red-500"
          >
            <AiFillCloseCircle
              className="text-slate-500 text-lg"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      {message && (
        <>
          <hr className="h-px m-0 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="p-3 break-words text-slate-600">{message}</div>
        </>
      )}
      {isConfirmation && (
        <div className="flex justify-end gap-2 p-2 mt-1">
          <button
            onClick={handleCancel}
            className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
          >
            {confirmText}
          </button>
        </div>
      )}
    </div>
  );
};

// Success toast
const showSuccessToast = (title: string, message?: string | ReactNode) => {
  const notificationTime = new Date();
  toast.custom((t) => (
    <CustomToast
      title={title}
      message={message}
      Icon={AiFillCheckCircle}
      iconColor="text-lime-500"
      bgColor="bg-green-100"
      notificationTime={notificationTime}
      t={t}
    />
  ));
};

// Error toast
const showErrorToast = (title: string, message?: string | ReactNode) => {
  const notificationTime = new Date();
  toast.custom((t) => (
    <CustomToast
      title={title}
      message={message}
      Icon={AiFillCloseCircle}
      iconColor="text-red-500"
      bgColor="bg-red-100"
      notificationTime={notificationTime}
      t={t}
    />
  ));
};

// Warning toast
const showWarningToast = (title: string, message?: string | ReactNode) => {
  const notificationTime = new Date();
  toast.custom((t) => (
    <CustomToast
      title={title}
      message={message}
      Icon={AiOutlineWarning}
      iconColor="text-yellow-500"
      bgColor="bg-yellow-100"
      notificationTime={notificationTime}
      t={t}
    />
  ));
};

// Info toast
const showInfoToast = (title: string, message?: string | ReactNode) => {
  const notificationTime = new Date();
  toast.custom((t) => (
    <CustomToast
      title={title}
      message={message}
      Icon={AiFillInfoCircle}
      iconColor="text-cyan-500"
      bgColor="bg-cyan-100"
      notificationTime={notificationTime}
      t={t}
    />
  ));
};

// Confirmation toast
const showConfirmationToast = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: {
  title: string;
  message: string | ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}) => {
  const notificationTime = new Date();
  toast.custom(
    (t) => (
      <CustomToast
        title={title}
        message={message}
        Icon={AiOutlineExclamationCircle}
        iconColor="text-red-500"
        bgColor="bg-red-50"
        notificationTime={notificationTime}
        t={t}
        isConfirmation={true}
        onConfirm={onConfirm}
        onCancel={onCancel}
        confirmText={confirmText}
        cancelText={cancelText}
      />
    ),
    {
      duration: Number.POSITIVE_INFINITY, // Don't auto-dismiss confirmation toasts
    }
  );
};

export {
  showSuccessToast,
  showErrorToast,
  showWarningToast,
  showInfoToast,
  showConfirmationToast,
};
