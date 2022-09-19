interface Props {
  children: React.ReactNode;
  handleClick: () => void;
}

export function Button(props: Props) {
  return (
    <button
      onClick={props.handleClick}
      className={
        "h-20 w-20 bg-slate-700 text-slate-50 text-xl font-bold active:bg-red-700"
      }
    >
      {props.children}
    </button>
  );
}
