import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console.log(data);
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl ? data.imageUrl: 'https://cdn.pixabay.com/photo/2019/08/28/09/51/reyban-4436327_1280.jpg'})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {/* {data?.label ? data.label : 'Explore The Special Collection!'} */}
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;
