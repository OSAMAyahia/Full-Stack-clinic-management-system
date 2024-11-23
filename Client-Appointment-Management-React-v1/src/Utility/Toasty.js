import { toast } from 'react-toastify';

export const toasty = (message, status) => {
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };