import { MouseEventHandler, useEffect, useRef } from "react";

export function UserProfile(props: {onAbortUserProfile: Function, userName: string}) {
  const { onAbortUserProfile, userName } = props;
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Function to handle clicks outside the Profile div
    function handleClickOutside(event: MouseEvent) {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        // The click was outside the div
        onAbortUserProfile();
      }
    }

    // Add the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onAbortUserProfile]);

  return (
    <div
      ref={divRef}
      className='absolute inset-999999 right-2 z-10 bg-slate-50 border rounded shadow-lg'
    >
      <p className="py-2 px-4">Romilton Gomes</p>
      <div className="p-0 border-b-2" />
      <p 
        className="py-2 px-4"
      >
        Sair
      </p>
    </div>
  )
}
