import { cn } from "../utils";

interface Props extends React.PropsWithChildren {
  className?: React.HTMLProps<HTMLButtonElement>["className"];
  href: string;
}

const Link: React.FC<Props> = ({ children, className, href }) => {
  return (
    <a
      href={href}
      className={cn(
        "transition-colors duration-150 text-sm md:text-xl text-center rounded-md w-full py-2 md:py-5 bg-primary-grey hover:bg-limey hover:text-primary-grey font-bold",
        className
      )}
    >
      {children}
    </a>
  );
};

export default Link;
