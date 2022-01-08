import { toast } from 'react-toastify';

export function warnToast (message){
    toast.warn(message, {
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {fontSize: 16 }
    })
}
export function errorToast (message){
    toast.error(message, {
        theme: "dark",
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}