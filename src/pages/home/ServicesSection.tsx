import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";
import StorageReplacement from "@/components/ServiceTiles/StorageReplacement";



const ServicesSection = () => {
    return (
        <Container className="my-40">
            <div className="text-center flex flex-col justify-center items-center">
                <h1>Services that we provide.</h1>
                <p className="max-w-[80ch] mt-10 mb-20">
                    We provide various computer repair services and solutions for our new and regular customers.
                    Feel free to find out more below.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-[20px]">
                <BatteryReplacement />
                <ChipsetReplacement />
                <DataRecovery />
                <StorageReplacement />
                <div className="bg-pink-500 h-[415px] rounded-2xl md:col-span-6 col-span-12 lg:col-span-4"></div>
                <div className="bg-pink-500 h-[415px] rounded-2xl md:col-span-6 col-span-12 lg:col-span-4"></div>
                <div className="bg-pink-500 h-[415px] rounded-2xl md:col-span-12 col-span-12 lg:col-span-4"></div>

            </div>
        </Container>
    );
};

export default ServicesSection;