import Tasks from "@/components/Tasks";
import Timer from "@/components/Timer";

const Home = ()=>  {
    return (
        <main>
            <div className="flex justify-center items-center flex-col gap-7">
                <Timer/>
                
                <div className="bg-gray-500 w-80 sm:w-107 flex flex-col rounded-sm">
                    <Tasks />
                </div>
            </div>
        </main>
    );
}

export default Home;