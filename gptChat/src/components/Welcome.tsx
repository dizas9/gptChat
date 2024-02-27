import { useFetchResponse } from "../hooks/useFetchResponse";

export default function Welcome() {
  const { handleClick } = useFetchResponse();

  const demoQuestion = [
    {
      title: "What is react",
      def: "Javascript  Library",
    },

    {
      title: "Artificial Intelligence",
      def: "Computer Vision, large Language Model",
    },
    {
      title: "Hello! How can I assist you today?",
      def: "AI ChatBot Assistance",
    },
    {
      title: "Bangladesh Premier Leuge",
      def: "T20 Franchize game",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-full lg:w-[55rem] h-[90%] items-center justify-center md:justify-center md:gap-7 gap-7  lg:ml-32  mt-9 lg:mt-0">
        <div className="flex flex-col items-center gap-2">
          <img src="/gpt.svg" alt="" className="w-9" />
          <p className="text-black font-semibold text-2xl">
            How can I help you today?
          </p>
        </div>
        {/* demoQuestion */}
        <div className="flex flex-col flex-wrap gap-5 md:w-[90%] lg:w-[65%] md:h-fit md:flex md:flex-row md:justify-between">
          {demoQuestion.map((items, index) => (
            <div
              className="border-2 p-2 rounded-lg md:w-[45%] md:h-fit"
              key={index}
              onClick={() => {
                handleClick(items.title);
                
              }}
            >
              <p className="text-black font-semibold">{items.title}</p>
              <p className="text-tertiarytxt">{items.def}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
