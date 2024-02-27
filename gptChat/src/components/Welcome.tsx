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
      <div className="flex flex-col w-full lg:w-[55rem] h-[90%] items-center justify-center md:justify-center md:gap-7 gap-7   lg:mt-10  mt-9  ">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/gpt.svg"
            alt=""
            className="w-14 rounded-full dark:bg-white"
          />
          <p className="text-black dark:text-white font-semibold text-2xl">
            How can I help you today?
          </p>
        </div>

        {/* demoQuestion */}
        <div className="flex flex-col flex-wrap gap-5 md:w-[90%] lg:w-[85%] md:h-fit md:flex md:flex-row md:justify-between ">
          {demoQuestion.map((items, index) => (
            <div
              className="border-[0.1em] dark:border-borderDark border-border p-2 rounded-lg md:w-[45%] md:h-fit"
              key={index}
              onClick={() => {
                handleClick(items.title);
              }}
            >
              <p className="text-black text-sm dark:text-white font-semibold">
                {items.title}
              </p>
              <p className="text-tertiarytxt text-sm">{items.def}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
