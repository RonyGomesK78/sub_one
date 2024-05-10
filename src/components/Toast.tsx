interface Props {
  message: String;
  color: String;
  showToast: boolean;
}
const Toast = (props: Props) => {

  const { message, color, showToast } = props;
  
  return (
    <div
      className={`fixed bottom-2 left-2 p-4 ${color} text-white font-semibold rounded-md ${
        showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      {message}
    </div>
  );
};

export default Toast;
