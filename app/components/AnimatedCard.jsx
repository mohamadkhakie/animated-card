export default function AnimatedCard() {
  return (
    <div className="flex h-screen justify-center items-center bg-black">
      <div className="group w-[348px] h-96 [perspective:1000px]">
        <div className="relative rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* front side  */}
          <div className="absolute inset-0 w-full [backface-visibility:hidden]">
            <div className="border-[0.5px] border-gray-300 rounded-md shadow-lg shadow-white/50">
              <div className="bg-gray-300 w-full h-[180px] flex items-center justify-center rounded-tr-md rounded-tl-md">
                348*180
              </div>
              <div className="p-4 flex flex-col space-y-2 bg-white text-black rounded-bl-md rounded-br-md">
                <p className="text-lg font-semibold">Card Flip</p>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="bg-blue-700 text-white rounded-md py-2 px-4 w-fit">
                  Go somewhere
                </div>
              </div>
            </div>
          </div>

          {/* back side  */}
          <div className="absolute inset-0 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col border-[0.5px] border-gray-300 text-black bg-white rounded-md shadow-lg shadow-white/50">
              <div className="p-4 flex flex-col space-y-1">
                <p className="text-lg font-semibold">Card Flip</p>
                <p className="text-gray-700/70 font-semibold">
                  Support card subtitle
                </p>
              </div>
              <div className="bg-gray-300 w-full h-[180px] flex items-center justify-center">
                Image
              </div>
              <div className="flex space-y-2 flex-col p-4">
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="flex space-x-6">
                  <p className="text-blue-700 cursor-pointer hover:underline">
                    Card Link
                  </p>
                  <p className="text-blue-700 cursor-pointer hover:underline">
                    Another Link
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed md:hidden bottom-3 px-4 text-center text-white">
        <p>
          To view the hover effect animation of the card, please check it out on
          a desktop.
        </p>
      </div>
    </div>
  );
}
