export const Spinner = ({ width, border }: { width: string; border: string }): JSX.Element => (
  <div
    className={`aspect-square ${width} animate-spin rounded-full ${border} border-bianca-300 border-b-orange-700`}></div>
);
