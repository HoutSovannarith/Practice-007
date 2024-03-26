'use client';
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import CardProduct from "@/components/card/CardProduct";

const ENDPOINT = "https:fakestoreapi.com/products/";

export default function Service() {
    const [product, setProduct] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch(ENDPOINT)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    },[])
    return (
        <div>
            <div
                className="h-screen flex flex-wrap gap-3 justify-center">
                {product.map((product:any,index) => (
                    <CardProduct onClick={() => router.push(`/services/${product.id}`)} key={index} title={product.title} image={product.image} price={product.price}/>
                ))}
            </div>
        </div>
    )
}