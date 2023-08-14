import { currentUser } from "@clerk/nextjs";
import Image from "next/image"
import { BookIcon, CalendarIcon, FileTextIcon, HomeIcon, ImageIcon, MoreHorizontal, Paperclip, SettingsIcon } from "lucide-react"

export default async function Index() {
  const user = await currentUser()
  return (
    <main className="pb-[110px]">
      <header className="flex items-center px-8 py-8 justify-between">
        <div className="flex w-full gap-2 items-center ">
          <Image src={user?.imageUrl ?? ''} alt={`${user?.firstName} profile image`} width={48} height={48} className="rounded-full" />
          <div className="flex flex-col">
            <p className="text-xs text-gray-500 font-light leading-none">Welcome back!</p>
            <p className="font-bold text-lg capitalize leading-none">{user?.firstName} {user?.lastName}</p>
          </div>
        </div>
        <MoreHorizontal className="h-6 w-6" />
      </header>

      <section className="px-8">
        <input type="text" placeholder="Search anything..." className="p-4 w-full rounded-lg shadow" />
      </section>

      <section className="mt-5">

        <div className="flex justify-between items-center px-8">
          <p className="font-semibold text-lg">
            On going task
          </p>
          <span className="text-[#70BC65] text-sm font-semibold">View All</span>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-5">
          <div className="p-3 w-[60%] bg-white rounded-lg shadow-lg mt-5 ml-8 flex-none">

            <div className="flex justify-between w-full items-center">
              <p className="font-semibold">Creating web...</p>
              <p className="font-light text-xs">19 June 2022</p>
            </div>
            <p className="text-xs mt-2">
              Create a website for job search.
              Deadline 3 weeks starting August 1
            </p>

            <div className="flex justify-between mt-3">
              <div className="flex relative">
                <Image src={user?.imageUrl ?? ''} alt={`${user?.firstName} profile image`} width={24} height={24} className="rounded-full border border-1 border-white" />
                <Image src={user?.imageUrl ?? ''} alt={`${user?.firstName} profile image`} width={24} height={24} className="rounded-full border border-1 border-white relative left-[-12px]" />
                <Image src={user?.imageUrl ?? ''} alt={`${user?.firstName} profile image`} width={24} height={24} className="rounded-full border border-1 border-white relative left-[-24px]" />
              </div>

              <div className="flex gap-2">
                <p className="flex px-1.5 py-0.5 items-center gap-1 bg-gray-200 rounded-full"><Paperclip className="h-3 w-3" /> <span className="text-xs">10</span></p>
                <p className="flex px-1.5 py-0.5 items-center gap-1 bg-gray-200 rounded-full"><ImageIcon className="h-3 w-3" /> <span className="text-xs">112</span></p>
              </div>
            </div>

          </div>


          <div className="p-3 w-[60%] bg-white rounded-lg shadow-lg mt-5 ml-5 flex-none">

            <div className="flex justify-between w-full items-center">
              <p className="font-semibold">Creating web...</p>
              <p className="font-light text-xs">19 June 2022</p>
            </div>
            <p className="text-xs mt-2">
              Create a website for job search.
              Deadline 3 weeks starting August 1
            </p>

            <div className="flex justify-between mt-3">
              <div className="flex relative">
                <Image src={user?.imageUrl ?? ''} alt={`${user?.firstName} profile image`} width={24} height={24} className="rounded-full border border-1 border-white" />
                <Image src={user?.imageUrl ?? ''} alt={`${user?.firstName} profile image`} width={24} height={24} className="rounded-full border border-1 border-white relative left-[-12px]" />
                <Image src={user?.imageUrl ?? ''} alt={`${user?.firstName} profile image`} width={24} height={24} className="rounded-full border border-1 border-white relative left-[-24px]" />
              </div>

              <div className="flex gap-2">
                <p className="flex px-1.5 py-0.5 items-center gap-1 bg-gray-200 rounded-full"><Paperclip className="h-3 w-3" /> <span className="text-xs">10</span></p>
                <p className="flex px-1.5 py-0.5 items-center gap-1 bg-gray-200 rounded-full"><ImageIcon className="h-3 w-3" /> <span className="text-xs">112</span></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex justify-between items-center px-8">
          <p className="font-semibold text-lg">
            Daily activity
          </p>
          <span className="text-[#70BC65] text-sm font-semibold">View All</span>
        </div>

        <div className="px-8 mt-5">
          <div className="bg-white rounded-lg shadow p-3 flex gap-5">
            <div className="bg-gray-200 grid place-items-center w-[48px] h-[48px] rounded-lg">
              <BookIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Creating a website design and...</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Meeting via zoom with client</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Creating 1 landing page</p>
            </div>
          </div>
        </div>

        <div className="px-8 mt-5">
          <div className="bg-white rounded-lg shadow p-3 flex gap-5">
            <div className="bg-gray-200 grid place-items-center w-[48px] h-[48px] rounded-lg">
              <BookIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Creating a website design and...</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Meeting via zoom with client</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Creating 1 landing page</p>
            </div>
          </div>
        </div>

        <div className="px-8 mt-5">
          <div className="bg-white rounded-lg shadow p-3 flex gap-5">
            <div className="bg-gray-200 grid place-items-center w-[48px] h-[48px] rounded-lg">
              <BookIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Creating a website design and...</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Meeting via zoom with client</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Creating 1 landing page</p>
            </div>
          </div>
        </div>

        <div className="px-8 mt-5">
          <div className="bg-white rounded-lg shadow p-3 flex gap-5">
            <div className="bg-gray-200 grid place-items-center w-[48px] h-[48px] rounded-lg">
              <BookIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Creating a website design and...</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Meeting via zoom with client</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Creating 1 landing page</p>
            </div>
          </div>
        </div>

        <div className="px-8 mt-5">
          <div className="bg-white rounded-lg shadow p-3 flex gap-5">
            <div className="bg-gray-200 grid place-items-center w-[48px] h-[48px] rounded-lg">
              <BookIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Creating a website design and...</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Meeting via zoom with client</p>
              <p className="flex gap-2 items-center"><input type="checkbox" />Creating 1 landing page</p>
            </div>
          </div>
        </div>
      </section>

      <nav className="bg-black flex justify-between px-8 py-8 fixed bottom-0 w-full h-[90px]">
        <HomeIcon className="h-6 w-6 text-white" />
        <CalendarIcon className="h-6 w-6 text-white" />
        <FileTextIcon className="h-6 w-6 text-white" />
        <SettingsIcon className="h-6 w-6 text-white" />
      </nav>

    </main>
  );
}
