import { useRef, useEffect } from 'react';

const ScrollToTop = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        if (buttonRef.current) {
          buttonRef.current.classList.remove('opacity-0');
          buttonRef.current.classList.add('opacity-1');
          buttonRef.current.disabled = false;
        }
      } else {
        if (buttonRef.current) {
          buttonRef.current.classList.remove('opacity-1');
          buttonRef.current.classList.add('opacity-0');
          buttonRef.current.disabled = true;
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scroll = () => {
    const isReduced =
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    const scrollToOptions: ScrollToOptions = {
      top: 0,
      behavior: 'instant',
    };
    if (!isReduced) scrollToOptions.behavior = 'smooth';

    window.scrollTo(scrollToOptions);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      title="scroll to top"
      onClick={scroll}
      className="
          opacity-0
          duration-700
          z-50
          fixed
          right-8
          bottom-8
          no-underline
          py-2
          px-2
          rounded-md
          font-black
          text-white
          bg-black
          transition-opacity
          hover:bg-gray-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
