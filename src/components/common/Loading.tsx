import { GridLoader } from 'react-spinners';

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <GridLoader color="#ED6184" size={20} />
    </div>
  );
};
