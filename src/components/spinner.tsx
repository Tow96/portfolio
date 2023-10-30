export const Spinner = ({ width, border }: { width: string; border: string }): JSX.Element => (
  <div
    className={`aspect-square ${width} animate-spin rounded-full ${border} border-stone-200 border-b-stone-300`}></div>
);
