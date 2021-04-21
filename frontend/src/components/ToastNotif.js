import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const toastCustomId = 'id007'
export const toastNotification = (message, type) => {
  if (type === 'error') {
    toast.error(message, {
      toastId: toastCustomId,
    })
  } else {
    toast.success(message, {
      taostId: toastCustomId,
    })
  }
  toast.clearWaitingQueue()
}
