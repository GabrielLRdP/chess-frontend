import { ToastProps } from '../../functions/triggerToast';
import { toastButtons } from './buttons';
const GenericToast = (props: ToastProps) => {
  const { title, description, buttons, id } = props;
  const buttonsElements = buttons?.map((b) => {
    const Button = toastButtons[b.type];
    return (
      <div className='ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden'>
        <Button label={b.label || ''} action={b.onClick} id={id} />
      </div>
    );
  });

  return (
    <div className='flex rounded-lg bg-secondary shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4'>
      <div className='flex flex-1 items-center'>
        <div className='w-full'>
          <p className='text-sm font-medium text-gray-900'>{title}</p>
          <p className='mt-1 text-sm text-gray-500'>{description}</p>
        </div>
      </div>
      {props.buttons && buttonsElements}
    </div>
  );
};

export default GenericToast;
