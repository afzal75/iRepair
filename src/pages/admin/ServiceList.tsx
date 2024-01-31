/* eslint-disable react-hooks/rules-of-hooks */

import { useDeleteService, useGetServices } from "@/api/admin/service/service.hook";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { FormEvent, useState } from "react";


const ServiceList = () => {

    const [serviceName, setServiceName] = useState('')

    const queryClient = useQueryClient()


    const { mutateAsync, isError: postError, isSuccess } = useMutation({
        mutationFn: async (data) => {
            return await fetch("http://localhost:5000/api/v1/services", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["services"] })
        }
    })


    console.log({ mutateAsync, postError, isSuccess })







    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()


        const serviceData = {
            name: serviceName,
            description: "Replace any dead chips",
            devices: ['MackBook pro', 'MackBook air', 'iPad pro'],
            price: 600
        }
        console.log(serviceData)

        await mutateAsync(serviceData)
        console.log("done")
    }

    const deleteService = useDeleteService();

    const handleDelete = async (serviceId: any) => {
        await deleteService(serviceId); // Invoke delete mutation
        queryClient.invalidateQueries({ queryKey: ["services"] }); // Refetch services after deletion
    };


    const { data: services, isLoading, isError } = useGetServices()

    if (isLoading) {
        return <p>Loading.........</p>
    }
    if (isError) {
        return <p>Something Went wrong</p>
    }


    return (
        <Container className="mt-20 border p-0 rounded-2xl">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell
                                className="font-medium">{service.name}</TableCell>
                            <TableCell>{service.description}</TableCell>
                            <TableCell>{service.price}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="destructive" className="p-2" onClick={() => handleDelete(service.id)}>
                                    <Trash2 />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total Services</TableCell>
                        <TableCell className="text-right">{services.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setServiceName(e.target.value)} />
                    <Button type="submit">Submit</Button>
                </form>
            </div>

        </Container>
    );
};

export default ServiceList;