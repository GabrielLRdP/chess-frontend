import { toast as sonnerToast } from 'sonner';
import { ToastProps } from '../../functions/toastFactory';
const GenericToast = (props: ToastProps) => {
  const { title, description, button, id } = props;

  return (
    <div className='flex rounded-lg bg-secondary shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4'>
      <div className='flex flex-1 items-center'>
        <div className='w-full'>
          <p className='text-sm font-medium text-gray-900'>{title}</p>
          <p className='mt-1 text-sm text-gray-500'>{description}</p>
        </div>
      </div>
      <div className='ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden'>
        {props.button && (
          <button
            className='rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100'
            onClick={() => {
              button?.onClick();
              sonnerToast.dismiss(id);
            }}
          >
            {button?.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default GenericToast;
