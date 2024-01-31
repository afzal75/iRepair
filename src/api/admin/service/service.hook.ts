import { useMutation, useQuery } from "@tanstack/react-query"
import { getServices } from "./service.api"

export const useGetServices = () => {
    const serviceData = useQuery({
        queryKey: ["services"],
        queryFn: getServices,
        select: (data) => {
            const services = data?.data?.map((item: any) => ({
                id: item._id,
                name: item.name,
                description: item.description,
                price: item.price,
            }))
            return services
        }
    })
    return serviceData

}



export const useDeleteService = () => {
    const { mutateAsync } = useMutation({
        mutationFn: async (serviceId) => {
            // Assuming your API endpoint for deleting a service is like: DELETE /api/v1/services/:serviceId
            const response = await fetch(`http://localhost:5000/api/v1/services/${serviceId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete service");
            }
            return response.json();
        },
    });

    return mutateAsync;
};