import { ToastProps } from '../../functions/triggerToast';
import { toastButtons } from './buttons';

const GenericToast = (props: ToastProps) => {
  const { title, description, buttons, id } = props;
  const buttonsElements = buttons?.map((b) => {
    const Button = toastButtons[b.type];
    return (
      <div className='ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden'>
        {/* @ts-expect-error b.action is either a function with a argument or not, correctly typing it would make more complexity for nothing*/}
        <Button label={b.label || ''} action={b.action} id={id} />
      </div>
    );
  });

  return (
    <div className='flex rounded-xl border-l-4 border-primary bg-secondary shadow-2xl ring-1 ring-black/10 w-full md:max-w-[364px] items-center p-5 gap-4 animate-fade-in'>
      <div className='flex flex-1 items-center'>
        <div className='w-full'>
          <p className='text-base font-extrabold text-primary mb-1'>{title}</p>
          <p className='text-sm text-gray-700'>{description}</p>
        </div>
      </div>
      {props.buttons && <div className='flex gap-2'>{buttonsElements}</div>}
    </div>
  );
};

export default GenericToast;
